## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,415,058|5207530|
|{ ...object, __proto__: null }|2,268,126|1134064|
|{ ...object, newProp: true }|10,262,814|5131408|
|structuredClone|303,085|151543|
|JSON.parse + JSON.stringify|244,205|122103|
|loop + object.keys starting with {}|1,450,006|725004|
|loop + object.keys starting with { __proto__: null }|802,896|401501|
|loop + object.keys starting with { randomProp: true }|652,890|326446|
|object.keys + reduce(FN, {})|1,476,269|738135|
|object.keys + reduce(FN, { __proto__: null })|807,574|403788|
|object.keys + reduce(FN, { newProp: true })|667,542|333772|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:27:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10415058.541895676,"samples":5207530},{"name":"{ ...object, __proto__: null }","opsSec":2268126.448603546,"samples":1134064},{"name":"{ ...object, newProp: true }","opsSec":10262814.973690135,"samples":5131408},{"name":"structuredClone","opsSec":303085.7448019056,"samples":151543},{"name":"JSON.parse + JSON.stringify","opsSec":244205.28301341683,"samples":122103},{"name":"loop + object.keys starting with {}","opsSec":1450006.9849991398,"samples":725004},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":802896.8510219369,"samples":401501},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":652890.1457922109,"samples":326446},{"name":"object.keys + reduce(FN, {})","opsSec":1476269.4242576673,"samples":738135},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":807574.6755774216,"samples":403788},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":667542.3631864504,"samples":333772}]}-->
