## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,107,490|12555526|
|{ ...object, __proto__: null }|2,486,755|1243379|
|{ ...object, newProp: true }|22,539,129|11269635|
|structuredClone|287,539|143803|
|JSON.parse + JSON.stringify|300,239|150148|
|loop + object.keys starting with {}|1,673,233|836745|
|loop + object.keys starting with { __proto__: null }|783,603|391802|
|loop + object.keys starting with { randomProp: true }|608,450|304294|
|object.keys + reduce(FN, {})|1,699,665|849897|
|object.keys + reduce(FN, { __proto__: null })|822,740|411391|
|object.keys + reduce(FN, { newProp: true })|612,061|306031|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:41:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":12555526,"opsSec":25107490.402056508},{"name":"{ ...object, __proto__: null }","samples":1243379,"opsSec":2486755.8862574967},{"name":"{ ...object, newProp: true }","samples":11269635,"opsSec":22539129.806612603},{"name":"structuredClone","samples":143803,"opsSec":287539.0890788932},{"name":"JSON.parse + JSON.stringify","samples":150148,"opsSec":300239.49252559076},{"name":"loop + object.keys starting with {}","samples":836745,"opsSec":1673233.684024879},{"name":"loop + object.keys starting with { __proto__: null }","samples":391802,"opsSec":783603.8949970781},{"name":"loop + object.keys starting with { randomProp: true }","samples":304294,"opsSec":608450.2894459896},{"name":"object.keys + reduce(FN, {})","samples":849897,"opsSec":1699665.1347888105},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":411391,"opsSec":822740.3693373115},{"name":"object.keys + reduce(FN, { newProp: true })","samples":306031,"opsSec":612061.2667506024}]}-->
