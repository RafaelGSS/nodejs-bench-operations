## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,532,478|84|
|{ ...object, __proto__: null }|11,994,117|87|
|{ ...object, newProp: true }|391,212|79|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|110,564|86|
|loop + object.keys starting with {}|255,813|87|
|loop + object.keys starting with { __proto__: null }|345,024|87|
|loop + object.keys starting with { randomProp: true }|264,852|87|
|object.keys + reduce(FN, {})|257,786|85|
|object.keys + reduce(FN, { __proto__: null })|362,149|90|
|object.keys + reduce(FN, { newProp: true })|274,671|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":11532478.212407364,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":11994116.638217885,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":391211.98481761216,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":110564.3489696545,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":255812.51248947243,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":345023.8452136282,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":264851.9328333818,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":257786.27767813063,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":362148.62708281004,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":274671.43422536884,"samples":5}]}-->
