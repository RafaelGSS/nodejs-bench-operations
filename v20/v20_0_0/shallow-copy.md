## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,567,132|93|
|{ ...object, __proto__: null }|20,867,304|92|
|{ ...object, newProp: true }|601,149|84|
|structuredClone|182,917|97|
|JSON.parse + JSON.stringify|147,633|96|
|loop + object.keys starting with {}|370,489|94|
|loop + object.keys starting with { __proto__: null }|492,120|93|
|loop + object.keys starting with { randomProp: true }|377,902|93|
|object.keys + reduce(FN, {})|365,875|95|
|object.keys + reduce(FN, { __proto__: null })|493,487|96|
|object.keys + reduce(FN, { newProp: true })|379,079|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":20567132.216218166,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":20867303.672608715,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":601148.8556594953,"samples":3},{"name":"structuredClone","opsSec":182916.8925366023,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":147633.14409526985,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":370489.24516725104,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":492120.47466014366,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":377901.57100323826,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":365874.7388809437,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":493487.1070454872,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":379078.6634657649,"samples":6}]}-->
