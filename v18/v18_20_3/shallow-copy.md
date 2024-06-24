## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,273,812|5136907|
|{ ...object, __proto__: null }|10,455,118|5227560|
|{ ...object, newProp: true }|634,148|317075|
|structuredClone|273,847|136924|
|JSON.parse + JSON.stringify|187,686|93844|
|loop + object.keys starting with {}|1,206,249|603125|
|loop + object.keys starting with { __proto__: null }|760,843|380422|
|loop + object.keys starting with { randomProp: true }|565,999|283000|
|object.keys + reduce(FN, {})|1,224,863|612432|
|object.keys + reduce(FN, { __proto__: null })|756,232|378117|
|object.keys + reduce(FN, { newProp: true })|565,246|282624|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:58:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10273812.18035168,"samples":5136907},{"name":"{ ...object, __proto__: null }","opsSec":10455118.369349387,"samples":5227560},{"name":"{ ...object, newProp: true }","opsSec":634148.4850483369,"samples":317075},{"name":"structuredClone","opsSec":273847.17909745843,"samples":136924},{"name":"JSON.parse + JSON.stringify","opsSec":187686.0308155075,"samples":93844},{"name":"loop + object.keys starting with {}","opsSec":1206249.019975732,"samples":603125},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":760843.844994291,"samples":380422},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":565999.3858579206,"samples":283000},{"name":"object.keys + reduce(FN, {})","opsSec":1224863.3487818264,"samples":612432},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":756232.2013488464,"samples":378117},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":565246.2023691508,"samples":282624}]}-->
