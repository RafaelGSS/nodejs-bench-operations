## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,064,262|5032132|
|{ ...object, __proto__: null }|10,087,544|5043773|
|{ ...object, newProp: true }|681,443|340722|
|structuredClone|274,844|137423|
|JSON.parse + JSON.stringify|188,005|94003|
|loop + object.keys starting with {}|1,409,454|704729|
|loop + object.keys starting with { __proto__: null }|785,000|392501|
|loop + object.keys starting with { randomProp: true }|618,758|309380|
|object.keys + reduce(FN, {})|1,426,279|713140|
|object.keys + reduce(FN, { __proto__: null })|804,126|402064|
|object.keys + reduce(FN, { newProp: true })|629,187|314594|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:24:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10064262.267555868,"samples":5032132},{"name":"{ ...object, __proto__: null }","opsSec":10087544.504053906,"samples":5043773},{"name":"{ ...object, newProp: true }","opsSec":681443.226323928,"samples":340722},{"name":"structuredClone","opsSec":274844.83530328213,"samples":137423},{"name":"JSON.parse + JSON.stringify","opsSec":188005.5336509771,"samples":94003},{"name":"loop + object.keys starting with {}","opsSec":1409454.6026339454,"samples":704729},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":785000.6562002393,"samples":392501},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":618758.7832254304,"samples":309380},{"name":"object.keys + reduce(FN, {})","opsSec":1426279.4246328387,"samples":713140},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":804126.8937825735,"samples":402064},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":629187.6009733633,"samples":314594}]}-->
