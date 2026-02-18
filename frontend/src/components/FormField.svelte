<script lang="ts">
  import type { JSONSchema } from "../lib/types";
  import { getFieldType, getDefaultValue, type FieldType } from "../lib/schema";
  import FormField from "./FormField.svelte";
  import { ChevronRight, ChevronDown, Plus, X } from "lucide-svelte";
  import { inputClass } from "../lib/ui";

  let {
    name,
    schema,
    required = false,
    value = $bindable(undefined),
    onchange,
  }: {
    name: string;
    schema: JSONSchema;
    required?: boolean;
    value?: unknown;
    onchange: (val: unknown) => void;
  } = $props();

  let fieldType = $derived<FieldType>(getFieldType(schema));
  let description = $derived(schema.description ?? "");

  // For object type: nested properties
  let objectValues = $derived(
    fieldType === "object" && typeof value === "object" && value !== null
      ? (value as Record<string, unknown>)
      : {},
  );

  // For array type
  let arrayItems = $derived(
    fieldType === "array" && Array.isArray(value) ? (value as unknown[]) : [],
  );

  // For oneOf/anyOf
  let unionOptions = $derived(schema.oneOf ?? schema.anyOf ?? []);
  let selectedVariant = $state(0);

  let collapsed = $state(false);

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    switch (fieldType) {
      case "number":
        onchange(target.value === "" ? undefined : parseFloat(target.value));
        break;
      case "integer":
        onchange(target.value === "" ? undefined : parseInt(target.value, 10));
        break;
      case "boolean":
        onchange(target.checked);
        break;
      default:
        onchange(target.value);
    }
  }

  function handleSelectChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    // Try to preserve type from enum
    if (schema.enum) {
      const enumVal = schema.enum[target.selectedIndex];
      onchange(enumVal);
    } else {
      onchange(target.value);
    }
  }

  function addArrayItem() {
    const itemDefault = schema.items ? getDefaultValue(schema.items) : "";
    onchange([...arrayItems, itemDefault]);
  }

  function removeArrayItem(index: number) {
    const newArr = [...arrayItems];
    newArr.splice(index, 1);
    onchange(newArr);
  }

  function updateArrayItem(index: number, val: unknown) {
    const newArr = [...arrayItems];
    newArr[index] = val;
    onchange(newArr);
  }

  function updateObjectProp(propName: string, val: unknown) {
    onchange({ ...objectValues, [propName]: val });
  }
</script>

<div class="group flex flex-col gap-2">
  {#if fieldType !== "object"}
    <label class="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for={name}>
      <span class="font-mono text-foreground">{name}</span>
      {#if required}
        <span class="text-destructive">*</span>
      {/if}
      {#if schema.type}
        <span class="rounded bg-muted px-1.5 py-0.5 text-[10px] uppercase text-muted-foreground">
          {schema.type}
        </span>
      {/if}
    </label>

    {#if description}
      <div class="text-[12px] text-muted-foreground opacity-80">{description}</div>
    {/if}
  {/if}

  {#if fieldType === "enum"}
    <div class="relative">
      <select id={name} onchange={handleSelectChange} class={inputClass}>
        {#each schema.enum ?? [] as opt, i}
          <option value={String(opt)} selected={value === opt}>{String(opt)}</option>
        {/each}
      </select>
    </div>

  {:else if fieldType === "boolean"}
    <div class="flex items-center space-x-2">
      <input
        type="checkbox"
        id={name}
        class="aspect-square h-4 w-4 rounded border-primary text-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 accent-primary"
        checked={value === true}
        onchange={handleInput}
      />
      <label for={name} class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {value ? "true" : "false"}
      </label>
    </div>

  {:else if fieldType === "number" || fieldType === "integer"}
    <input
      type="number"
      id={name}
      class={inputClass}
      value={value ?? ""}
      placeholder={schema.default !== undefined ? `Default: ${schema.default}` : ""}
      min={schema.minimum}
      max={schema.maximum}
      step={fieldType === "integer" ? 1 : "any"}
      oninput={handleInput}
    />

  {:else if fieldType === "string"}
    {#if schema.format === "date"}
      <input type="date" id={name} class={inputClass} value={value ?? ""} oninput={handleInput} />
    {:else if schema.format === "uri"}
      <input
        type="url"
        id={name}
        class={inputClass}
        value={value ?? ""}
        placeholder="https://..."
        oninput={handleInput}
      />
    {:else if schema.maxLength && schema.maxLength > 200}
      <textarea
        id={name}
        class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        value={value ?? ""}
        placeholder={schema.default !== undefined ? `Default: ${schema.default}` : ""}
        rows="4"
        oninput={handleInput}
      ></textarea>
    {:else}
      <input
        type="text"
        id={name}
        class={inputClass}
        value={value ?? ""}
        placeholder={schema.default !== undefined ? `Default: ${schema.default}` : ""}
        minlength={schema.minLength}
        maxlength={schema.maxLength}
        oninput={handleInput}
      />
    {/if}

  {:else if fieldType === "object"}
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
      <button 
        class="flex w-full items-center gap-2 border-b bg-muted/20 px-4 py-2 text-left text-sm font-medium hover:bg-muted/40"
        onclick={() => (collapsed = !collapsed)}
      >
        {#if collapsed}
          <ChevronRight size={14} class="text-muted-foreground" />
        {:else}
          <ChevronDown size={14} class="text-muted-foreground" />
        {/if}
        <span class="font-mono">{name}</span>
        <span class="text-xs text-muted-foreground">object</span>
        {#if required}
          <span class="text-xs text-destructive">*</span>
        {/if}
      </button>
      
      {#if !collapsed}
        <div class="flex flex-col gap-4 p-4">
          {#if description}
            <div class="text-xs text-muted-foreground">{description}</div>
          {/if}
          {#each Object.entries(schema.properties ?? {}) as [propName, propSchema] (propName)}
            <FormField
              name={propName}
              schema={propSchema}
              required={schema.required?.includes(propName) ?? false}
              value={objectValues[propName]}
              onchange={(val) => updateObjectProp(propName, val)}
            />
          {/each}
        </div>
      {/if}
    </div>

  {:else if fieldType === "array"}
    <div class="space-y-2 rounded-lg border bg-muted/10 p-3">
      <div class="flex items-center justify-between">
         <span class="text-xs font-semibold uppercase text-muted-foreground">Array Items</span>
         <button 
          class="inline-flex h-6 items-center gap-1 rounded-full border bg-background px-2 text-[10px] font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          onclick={addArrayItem}
        >
          <Plus size={10} /> Add Item
        </button>
      </div>
     
      <div class="space-y-2">
        {#each arrayItems as item, i (i)}
          <div class="flex items-start gap-2">
            <span class="mt-2 font-mono text-xs text-muted-foreground min-w-[20px] text-right">[{i}]</span>
            <div class="flex-1">
              {#if schema.items?.type === "object"}
                <FormField
                  name={`${name}[${i}]`}
                  schema={schema.items}
                  value={item}
                  onchange={(val) => updateArrayItem(i, val)}
                />
              {:else}
                <input
                  type="text"
                  class={inputClass}
                  value={item ?? ""}
                  oninput={(e) => updateArrayItem(i, (e.target as HTMLInputElement).value)}
                />
              {/if}
            </div>
            <button 
              class="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-destructive hover:text-destructive-foreground"
              onclick={() => removeArrayItem(i)} 
              title="Remove"
            >
              <X size={14} />
            </button>
          </div>
        {/each}
        
        {#if arrayItems.length === 0}
          <div class="py-2 text-center text-xs italic text-muted-foreground">Empty array</div>
        {/if}
      </div>
    </div>

  {:else if fieldType === "oneOf" || fieldType === "anyOf"}
    <div class="rounded-md border p-4">
      <div class="mb-4">
        <label class="mb-2 block text-xs font-medium text-muted-foreground" for={`${name}_variant_select`}>Select Type Variant</label>
        <select
          id={`${name}_variant_select`}
          class={inputClass}
          onchange={(e) => {
            selectedVariant = (e.target as HTMLSelectElement).selectedIndex;
            onchange(getDefaultValue(unionOptions[selectedVariant]));
          }}
        >
          {#each unionOptions as opt, i}
            <option value={i} selected={i === selectedVariant}>
              {opt.title ?? opt.type ?? `Option ${i + 1}`}
            </option>
          {/each}
        </select>
      </div>
      {#if unionOptions[selectedVariant]}
        <div class="pl-2 border-l-2 border-primary">
          <FormField
            name={`${name}_variant`}
            schema={unionOptions[selectedVariant]}
            value={value}
            {onchange}
          />
        </div>
      {/if}
    </div>

  {:else}
    <!-- Fallback: raw JSON input -->
    <textarea
      id={name}
      class="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      value={typeof value === "string" ? value : JSON.stringify(value ?? "", null, 2)}
      rows="3"
      oninput={(e) => {
        const text = (e.target as HTMLTextAreaElement).value;
        try {
          onchange(JSON.parse(text));
        } catch {
          onchange(text);
        }
      }}
    ></textarea>
  {/if}
</div>
