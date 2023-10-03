## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,458,050|94|
|{ ...object, __proto__: null }|13,557,547|94|
|{ ...object, newProp: true }|502,326|80|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|141,191|97|
|loop + object.keys starting with {}|324,792|94|
|loop + object.keys starting with { __proto__: null }|422,290|94|
|loop + object.keys starting with { randomProp: true }|337,052|97|
|object.keys + reduce(FN, {})|326,023|95|
|object.keys + reduce(FN, { __proto__: null })|425,439|96|
|object.keys + reduce(FN, { newProp: true })|337,928|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:45:07 GMT+0000 (Coordinated Universal Time)
</details>

