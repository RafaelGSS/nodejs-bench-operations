## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|28,019,199|95|
|{ ...object, __proto__: null }|28,520,684|98|
|{ ...object, newProp: true }|758,567|88|
|structuredClone|283,211|97|
|JSON.parse + JSON.stringify|190,112|97|
|loop + object.keys starting with {}|1,271,234|96|
|loop + object.keys starting with { __proto__: null }|776,157|98|
|loop + object.keys starting with { randomProp: true }|571,259|93|
|object.keys + reduce(FN, {})|1,293,639|95|
|object.keys + reduce(FN, { __proto__: null })|788,918|96|
|object.keys + reduce(FN, { newProp: true })|575,859|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:22:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":28019199.480665065,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":28520683.849321757,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":758567.4401669378,"samples":3},{"name":"structuredClone","opsSec":283210.8263735827,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":190111.57408971403,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":1271233.8938344442,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":776157.2553437745,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":571259.1853106224,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":1293639.001804399,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":788917.9373211683,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":575858.6805038109,"samples":5}]}-->
