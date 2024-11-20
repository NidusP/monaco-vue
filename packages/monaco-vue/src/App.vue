<script setup lang="ts">
import { ref } from 'vue';
import Editor from './Editor';

const val = `WITH RankedEmployees AS (
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
    salary DESC;`

const languages = ref('sql')
const value = ref(val)
const theme = ref('light')
/**
 * Toggles the value of the `languages` ref between 'sql' and 'java'.
 * If the current value is neither 'sql' nor 'java', it defaults to 'sql'.
 */
const handleClick = () => {
  if (theme.value === 'light') {
    theme.value = 'vs-dark'
  } else {
    theme.value = 'light'
  }

  if (languages.value === 'sql') {
    languages.value = 'java'
  } else if (languages.value === 'java') {
    languages.value = 'sql'
  } else {
    languages.value = 'sql'
  }
}

</script>

<template>
  Editor
  <Editor width="100vw" height="300px" :languages="languages" :options="{}" :default-value="val"
    v-model:value="value" />
  <button @click="handleClick">click</button>
  <textarea v-model="value" :style="{ width: '100vw', height: '300px' }"></textarea>
  <Editor width="100vw" :height="300" :languages="languages === 'sql' ? 'java' : 'sql'" :options="{}"
    :default-value="val" v-model:value="value" theme="lgight" />
</template>
