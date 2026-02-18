# Forms

mcpplay auto-generates form controls from your tool's `inputSchema`. Click a tool in the sidebar and the form appears.

## Type mapping

| Schema type | UI control |
|-------------|-----------|
| `string` | Text input |
| `string` + `enum` | Dropdown select |
| `number` / `integer` | Numeric input |
| `boolean` | Checkbox |
| `object` | Nested fieldset |
| `array` | List with add/remove buttons |
| `oneOf` / `anyOf` | Variant selector |

## Schema features

**Required fields** are marked visually and validated before submission.

**Default values** are pre-filled. Use the reset button to restore defaults.

**Descriptions** from the schema appear as help text below each field.

## Form persistence

Form values are stored in `localStorage` per tool. Switch between tools and your inputs are preserved.

## Raw JSON

For advanced use cases, switch to the **JSON** tab to edit the raw payload directly. The **Schema** tab shows the full JSON Schema definition.
