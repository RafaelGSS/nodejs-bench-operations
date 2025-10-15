## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,389,990|11208251|
|{ ...object, __proto__: null }|22,476,268|11238376|
|{ ...object, newProp: true }|796,536|404666|
|structuredClone|296,631|148337|
|JSON.parse + JSON.stringify|192,620|96312|
|loop + object.keys starting with {}|1,536,201|768185|
|loop + object.keys starting with { __proto__: null }|767,410|383743|
|loop + object.keys starting with { randomProp: true }|547,884|273944|
|object.keys + reduce(FN, {})|1,555,859|778063|
|object.keys + reduce(FN, { __proto__: null })|801,661|400836|
|object.keys + reduce(FN, { newProp: true })|516,031|258027|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:29:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":11208251,"opsSec":22389990.8626392},{"name":"{ ...object, __proto__: null }","samples":11238376,"opsSec":22476268.580415376},{"name":"{ ...object, newProp: true }","samples":404666,"opsSec":796536.667561007},{"name":"structuredClone","samples":148337,"opsSec":296631.5508385488},{"name":"JSON.parse + JSON.stringify","samples":96312,"opsSec":192620.88532028435},{"name":"loop + object.keys starting with {}","samples":768185,"opsSec":1536201.616940767},{"name":"loop + object.keys starting with { __proto__: null }","samples":383743,"opsSec":767410.1522501921},{"name":"loop + object.keys starting with { randomProp: true }","samples":273944,"opsSec":547884.7641925827},{"name":"object.keys + reduce(FN, {})","samples":778063,"opsSec":1555859.9043922715},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":400836,"opsSec":801661.8188948999},{"name":"object.keys + reduce(FN, { newProp: true })","samples":258027,"opsSec":516031.6558293026}]}-->
