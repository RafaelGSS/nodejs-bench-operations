## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,932,331|4966166|
|{ ...object, __proto__: null }|2,147,524|1073763|
|{ ...object, newProp: true }|9,467,092|4733547|
|structuredClone|290,737|145369|
|JSON.parse + JSON.stringify|274,036|137019|
|loop + object.keys starting with {}|1,437,505|718753|
|loop + object.keys starting with { __proto__: null }|810,745|405373|
|loop + object.keys starting with { randomProp: true }|576,995|288498|
|object.keys + reduce(FN, {})|1,473,838|736930|
|object.keys + reduce(FN, { __proto__: null })|774,958|387480|
|object.keys + reduce(FN, { newProp: true })|608,456|304229|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:13:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":9932331.66232601,"samples":4966166},{"name":"{ ...object, __proto__: null }","opsSec":2147524.7028889996,"samples":1073763},{"name":"{ ...object, newProp: true }","opsSec":9467092.693658555,"samples":4733547},{"name":"structuredClone","opsSec":290737.32548881264,"samples":145369},{"name":"JSON.parse + JSON.stringify","opsSec":274036.61666350625,"samples":137019},{"name":"loop + object.keys starting with {}","opsSec":1437505.0914980958,"samples":718753},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":810745.6935381539,"samples":405373},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":576995.6064885063,"samples":288498},{"name":"object.keys + reduce(FN, {})","opsSec":1473838.4406899211,"samples":736930},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":774958.9414032298,"samples":387480},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":608456.3401299135,"samples":304229}]}-->
