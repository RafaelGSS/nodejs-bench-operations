## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,895,245|5947623|
|{ ...object, __proto__: null }|11,213,134|5606568|
|{ ...object, newProp: true }|823,918|411960|
|structuredClone|306,729|153365|
|JSON.parse + JSON.stringify|185,223|92612|
|loop + object.keys starting with {}|1,447,391|723696|
|loop + object.keys starting with { __proto__: null }|864,355|432178|
|loop + object.keys starting with { randomProp: true }|641,799|320900|
|object.keys + reduce(FN, {})|1,483,510|741756|
|object.keys + reduce(FN, { __proto__: null })|839,297|419649|
|object.keys + reduce(FN, { newProp: true })|659,395|329698|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:01:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":11895245.238688992,"samples":5947623},{"name":"{ ...object, __proto__: null }","opsSec":11213134.430146981,"samples":5606568},{"name":"{ ...object, newProp: true }","opsSec":823918.8382740747,"samples":411960},{"name":"structuredClone","opsSec":306729.3902220392,"samples":153365},{"name":"JSON.parse + JSON.stringify","opsSec":185223.6843788394,"samples":92612},{"name":"loop + object.keys starting with {}","opsSec":1447391.5542035557,"samples":723696},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":864355.5488068797,"samples":432178},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":641799.3761707437,"samples":320900},{"name":"object.keys + reduce(FN, {})","opsSec":1483510.2791265384,"samples":741756},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":839297.8354973944,"samples":419649},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":659395.0412393095,"samples":329698}]}-->
