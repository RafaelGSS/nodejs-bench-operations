## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,998,404|5999203|
|{ ...object, __proto__: null }|10,873,160|5436581|
|{ ...object, newProp: true }|710,633|355318|
|structuredClone|273,154|136578|
|JSON.parse + JSON.stringify|180,536|90269|
|loop + object.keys starting with {}|1,269,147|634574|
|loop + object.keys starting with { __proto__: null }|704,327|352164|
|loop + object.keys starting with { randomProp: true }|565,823|282912|
|object.keys + reduce(FN, {})|1,241,043|620522|
|object.keys + reduce(FN, { __proto__: null })|700,336|350169|
|object.keys + reduce(FN, { newProp: true })|572,308|286155|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:59:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":11998404.982102882,"samples":5999203},{"name":"{ ...object, __proto__: null }","opsSec":10873160.233506862,"samples":5436581},{"name":"{ ...object, newProp: true }","opsSec":710633.7063752686,"samples":355318},{"name":"structuredClone","opsSec":273154.54968088516,"samples":136578},{"name":"JSON.parse + JSON.stringify","opsSec":180536.93382069957,"samples":90269},{"name":"loop + object.keys starting with {}","opsSec":1269147.481084638,"samples":634574},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":704327.8817389224,"samples":352164},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":565823.0499117074,"samples":282912},{"name":"object.keys + reduce(FN, {})","opsSec":1241043.9671286992,"samples":620522},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":700336.7568159899,"samples":350169},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":572308.2598796882,"samples":286155}]}-->
