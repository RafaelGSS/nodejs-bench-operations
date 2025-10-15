## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,822,881|12413503|
|{ ...object, __proto__: null }|2,281,178|1140798|
|{ ...object, newProp: true }|23,145,832|11574879|
|structuredClone|300,459|150230|
|JSON.parse + JSON.stringify|318,237|159144|
|loop + object.keys starting with {}|1,691,263|845643|
|loop + object.keys starting with { __proto__: null }|915,955|458042|
|loop + object.keys starting with { randomProp: true }|695,194|347653|
|object.keys + reduce(FN, {})|1,767,324|883663|
|object.keys + reduce(FN, { __proto__: null })|953,857|477002|
|object.keys + reduce(FN, { newProp: true })|711,019|355519|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:29:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12413503,"opsSec":24822881.032921474},{"name":"{ ...object, __proto__: null }","samples":1140798,"opsSec":2281178.028874481},{"name":"{ ...object, newProp: true }","samples":11574879,"opsSec":23145832.513097443},{"name":"structuredClone","samples":150230,"opsSec":300459.7806643601},{"name":"JSON.parse + JSON.stringify","samples":159144,"opsSec":318237.8438063891},{"name":"loop + object.keys starting with {}","samples":845643,"opsSec":1691263.123974985},{"name":"loop + object.keys starting with { __proto__: null }","samples":458042,"opsSec":915955.515256053},{"name":"loop + object.keys starting with { randomProp: true }","samples":347653,"opsSec":695194.9050733896},{"name":"object.keys + reduce(FN, {})","samples":883663,"opsSec":1767324.8724467314},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":477002,"opsSec":953857.1594134512},{"name":"object.keys + reduce(FN, { newProp: true })","samples":355519,"opsSec":711019.6855549394}]}-->
