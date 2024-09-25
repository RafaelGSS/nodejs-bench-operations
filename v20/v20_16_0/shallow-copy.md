## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,936,780|4968391|
|{ ...object, __proto__: null }|9,323,164|4661583|
|{ ...object, newProp: true }|786,832|393417|
|structuredClone|269,935|134968|
|JSON.parse + JSON.stringify|183,812|92035|
|loop + object.keys starting with {}|1,249,334|624668|
|loop + object.keys starting with { __proto__: null }|741,587|370794|
|loop + object.keys starting with { randomProp: true }|465,906|232954|
|object.keys + reduce(FN, {})|1,228,810|614406|
|object.keys + reduce(FN, { __proto__: null })|650,686|325367|
|object.keys + reduce(FN, { newProp: true })|501,717|251061|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:50:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9936780.44985435,"samples":4968391},{"name":"{ ...object, __proto__: null }","opsSec":9323164.787990676,"samples":4661583},{"name":"{ ...object, newProp: true }","opsSec":786832.6859915344,"samples":393417},{"name":"structuredClone","opsSec":269935.1912741308,"samples":134968},{"name":"JSON.parse + JSON.stringify","opsSec":183812.77093773702,"samples":92035},{"name":"loop + object.keys starting with {}","opsSec":1249334.5182897686,"samples":624668},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":741587.136789793,"samples":370794},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":465906.9433226202,"samples":232954},{"name":"object.keys + reduce(FN, {})","opsSec":1228810.9530556013,"samples":614406},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":650686.3125037026,"samples":325367},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":501717.7299013056,"samples":251061}]}-->
