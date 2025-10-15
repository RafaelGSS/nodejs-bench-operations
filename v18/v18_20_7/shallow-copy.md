## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,236,812|10618702|
|{ ...object, __proto__: null }|21,433,872|10717088|
|{ ...object, newProp: true }|583,909|299426|
|structuredClone|253,706|126856|
|JSON.parse + JSON.stringify|196,957|98523|
|loop + object.keys starting with {}|1,268,756|634380|
|loop + object.keys starting with { __proto__: null }|721,901|360951|
|loop + object.keys starting with { randomProp: true }|514,887|257448|
|object.keys + reduce(FN, {})|1,275,833|638078|
|object.keys + reduce(FN, { __proto__: null })|731,265|365780|
|object.keys + reduce(FN, { newProp: true })|508,163|254139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:31:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":10618702,"opsSec":21236812.682187676},{"name":"{ ...object, __proto__: null }","samples":10717088,"opsSec":21433872.96790398},{"name":"{ ...object, newProp: true }","samples":299426,"opsSec":583909.0469449157},{"name":"structuredClone","samples":126856,"opsSec":253706.1256883658},{"name":"JSON.parse + JSON.stringify","samples":98523,"opsSec":196957.36839639215},{"name":"loop + object.keys starting with {}","samples":634380,"opsSec":1268756.0008810854},{"name":"loop + object.keys starting with { __proto__: null }","samples":360951,"opsSec":721901.3300755657},{"name":"loop + object.keys starting with { randomProp: true }","samples":257448,"opsSec":514887.1707147966},{"name":"object.keys + reduce(FN, {})","samples":638078,"opsSec":1275833.0381763822},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":365780,"opsSec":731265.5559239072},{"name":"object.keys + reduce(FN, { newProp: true })","samples":254139,"opsSec":508163.3573302596}]}-->
