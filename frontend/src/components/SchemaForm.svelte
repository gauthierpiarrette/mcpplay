<script lang="ts">
  import type { JSONSchema } from "../lib/types";
  import FormField from "./FormField.svelte";
  import { FileQuestion } from "lucide-svelte";

  let {
    schema,
    values = $bindable({}),
  }: {
    schema: JSONSchema;
    values: Record<string, unknown>;
  } = $props();

  let properties = $derived(schema.properties ?? {});
  let requiredFields = $derived(new Set(schema.required ?? []));
  let propertyNames = $derived(Object.keys(properties));
</script>

<div class="space-y-6">
  {#each propertyNames as propName (propName)}
    {@const propSchema = properties[propName]}
    {@const isReq = requiredFields.has(propName)}
    <FormField
      name={propName}
      schema={propSchema}
      required={isReq}
      value={values[propName]}
      onchange={(val) => {
        values = { ...values, [propName]: val };
      }}
    />
  {/each}

  {#if propertyNames.length === 0}
    <div
      class="flex flex-col items-center justify-center rounded-lg border border-dashed py-10 text-center text-muted-foreground bg-muted/30"
    >
      <FileQuestion class="mb-2 h-8 w-8 opacity-20" />
      <p class="text-sm italic">This tool takes no parameters.</p>
    </div>
  {/if}
</div>
