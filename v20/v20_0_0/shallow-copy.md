## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,013,047|4506524|
|{ ...object, __proto__: null }|8,632,937|4316469|
|{ ...object, newProp: true }|679,518|340167|
|structuredClone|252,130|126066|
|JSON.parse + JSON.stringify|190,481|95241|
|loop + object.keys starting with {}|1,243,478|621740|
|loop + object.keys starting with { __proto__: null }|679,074|339538|
|loop + object.keys starting with { randomProp: true }|513,129|256565|
|object.keys + reduce(FN, {})|1,195,315|597658|
|object.keys + reduce(FN, { __proto__: null })|717,075|358538|
|object.keys + reduce(FN, { newProp: true })|503,606|251804|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:49:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9013047.770875879,"samples":4506524},{"name":"{ ...object, __proto__: null }","opsSec":8632937.936547926,"samples":4316469},{"name":"{ ...object, newProp: true }","opsSec":679518.2717973902,"samples":340167},{"name":"structuredClone","opsSec":252130.31812123396,"samples":126066},{"name":"JSON.parse + JSON.stringify","opsSec":190481.82260636496,"samples":95241},{"name":"loop + object.keys starting with {}","opsSec":1243478.912141356,"samples":621740},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":679074.7960840289,"samples":339538},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":513129.40215513145,"samples":256565},{"name":"object.keys + reduce(FN, {})","opsSec":1195315.2517887386,"samples":597658},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":717075.6746391691,"samples":358538},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":503606.15099834115,"samples":251804}]}-->
