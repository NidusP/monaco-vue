<script setup>
import {ref} from 'vue'
import Editor, {monacoVue} from '@monaco-editor/vue'
const value = ref(`WITH RankedEmployees AS (
    SELECT 
        e.employee_id,
        e.first_name,
        e.last_name,
        d.department_name,
        e.salary,
        RANK() OVER (PARTITION BY e.department_id ORDER BY e.salary DESC) AS salary_rank
    FROM 
        employees e
    JOIN 
        departments d ON e.department_id = d.department_id
)
SELECT 
    employee_id,
    first_name,
    last_name,
    department_name,
    salary
FROM 
    RankedEmployees
WHERE 
    salary_rank = 1
ORDER BY 
    department_name ASC, 
    salary DESC;`)
</script>

# Markdown Extension Examples

## Syntax Highlighting

<Editor width="100%" height="300px" theme="vs-dark" v-model:value="value" languages="sql" />

## Custom Containers

**Input**


**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
