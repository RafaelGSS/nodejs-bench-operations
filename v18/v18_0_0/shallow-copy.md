## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|14,805,773|90|
|{ ...object, __proto__: null }|15,323,391|99|
|{ ...object, newProp: true }|494,080|77|
|structuredClone|175,661|96|
|JSON.parse + JSON.stringify|143,975|95|
|loop + object.keys starting with {}|658,851|97|
|loop + object.keys starting with { __proto__: null }|416,865|96|
|loop + object.keys starting with { randomProp: true }|328,397|98|
|object.keys + reduce(FN, {})|322,452|97|
|object.keys + reduce(FN, { __proto__: null })|416,524|92|
|object.keys + reduce(FN, { newProp: true })|332,373|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":14805772.88702505,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":15323390.525096383,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":494079.508969354,"samples":3},{"name":"structuredClone","opsSec":175661.37614081294,"samples":8},{"name":"JSON.parse + JSON.stringify","opsSec":143975.09777117986,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":658850.6066054046,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":416865.0879822274,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":328397.3287534863,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":322452.46810754295,"samples":7},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":416523.7158293562,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":332373.2346594031,"samples":5}]}-->
