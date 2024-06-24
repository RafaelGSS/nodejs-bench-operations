## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,445,275|4722639|
|{ ...object, __proto__: null }|10,084,973|5042487|
|{ ...object, newProp: true }|685,598|342801|
|structuredClone|273,877|136939|
|JSON.parse + JSON.stringify|184,920|92461|
|loop + object.keys starting with {}|1,412,652|706327|
|loop + object.keys starting with { __proto__: null }|764,823|382412|
|loop + object.keys starting with { randomProp: true }|603,694|301848|
|object.keys + reduce(FN, {})|1,407,841|703921|
|object.keys + reduce(FN, { __proto__: null })|770,476|385239|
|object.keys + reduce(FN, { newProp: true })|621,010|310506|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:00:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":9445275.92241932,"samples":4722639},{"name":"{ ...object, __proto__: null }","opsSec":10084973.778978897,"samples":5042487},{"name":"{ ...object, newProp: true }","opsSec":685598.7466174625,"samples":342801},{"name":"structuredClone","opsSec":273877.3211667752,"samples":136939},{"name":"JSON.parse + JSON.stringify","opsSec":184920.57277051572,"samples":92461},{"name":"loop + object.keys starting with {}","opsSec":1412652.2910322759,"samples":706327},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":764823.7055846156,"samples":382412},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":603694.9675548322,"samples":301848},{"name":"object.keys + reduce(FN, {})","opsSec":1407841.1885056375,"samples":703921},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":770476.4069892403,"samples":385239},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":621010.1406302964,"samples":310506}]}-->
