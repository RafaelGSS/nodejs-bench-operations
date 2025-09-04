## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,303,620|10153896|
|{ ...object, __proto__: null }|20,482,753|10241463|
|{ ...object, newProp: true }|811,869|407235|
|structuredClone|280,957|140481|
|JSON.parse + JSON.stringify|187,790|93896|
|loop + object.keys starting with {}|1,502,809|751565|
|loop + object.keys starting with { __proto__: null }|721,423|360927|
|loop + object.keys starting with { randomProp: true }|568,590|285002|
|object.keys + reduce(FN, {})|1,503,805|752139|
|object.keys + reduce(FN, { __proto__: null })|772,968|386551|
|object.keys + reduce(FN, { newProp: true })|553,747|276965|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:09:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":10153896,"opsSec":20303620.377549987},{"name":"{ ...object, __proto__: null }","samples":10241463,"opsSec":20482753.12556362},{"name":"{ ...object, newProp: true }","samples":407235,"opsSec":811869.2628745233},{"name":"structuredClone","samples":140481,"opsSec":280957.01413682714},{"name":"JSON.parse + JSON.stringify","samples":93896,"opsSec":187790.90780808017},{"name":"loop + object.keys starting with {}","samples":751565,"opsSec":1502809.5198586523},{"name":"loop + object.keys starting with { __proto__: null }","samples":360927,"opsSec":721423.0435164946},{"name":"loop + object.keys starting with { randomProp: true }","samples":285002,"opsSec":568590.1993321801},{"name":"object.keys + reduce(FN, {})","samples":752139,"opsSec":1503805.8621039223},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":386551,"opsSec":772968.4975189194},{"name":"object.keys + reduce(FN, { newProp: true })","samples":276965,"opsSec":553747.5080787325}]}-->
