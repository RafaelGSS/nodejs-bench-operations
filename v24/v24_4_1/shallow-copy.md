## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,424,653|11812209|
|{ ...object, __proto__: null }|2,320,387|1160471|
|{ ...object, newProp: true }|22,819,807|11413236|
|structuredClone|285,973|143003|
|JSON.parse + JSON.stringify|285,150|142623|
|loop + object.keys starting with {}|1,723,999|862000|
|loop + object.keys starting with { __proto__: null }|926,212|463129|
|loop + object.keys starting with { randomProp: true }|680,657|340330|
|object.keys + reduce(FN, {})|1,783,931|892100|
|object.keys + reduce(FN, { __proto__: null })|959,438|479740|
|object.keys + reduce(FN, { newProp: true })|674,297|337149|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:58:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":11812209,"opsSec":23424653.213287376},{"name":"{ ...object, __proto__: null }","samples":1160471,"opsSec":2320387.8542541983},{"name":"{ ...object, newProp: true }","samples":11413236,"opsSec":22819807.52085315},{"name":"structuredClone","samples":143003,"opsSec":285973.7261491617},{"name":"JSON.parse + JSON.stringify","samples":142623,"opsSec":285150.0777950304},{"name":"loop + object.keys starting with {}","samples":862000,"opsSec":1723999.7482960366},{"name":"loop + object.keys starting with { __proto__: null }","samples":463129,"opsSec":926212.8156340021},{"name":"loop + object.keys starting with { randomProp: true }","samples":340330,"opsSec":680657.6449245486},{"name":"object.keys + reduce(FN, {})","samples":892100,"opsSec":1783931.6574322258},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":479740,"opsSec":959438.0936629451},{"name":"object.keys + reduce(FN, { newProp: true })","samples":337149,"opsSec":674297.2205124131}]}-->
