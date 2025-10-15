## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,766|884|
|{...smallObject} - Total keys: 2|42,021,345|21017457|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,058|530|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,843|3422|
|{ ...bigObject, ...anotherBigObject }|1,112|557|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,252,114|6129453|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,494,182|14247093|
|{ ...smallObject, ...anotherSmallObject }|21,028,469|10521186|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:41:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":884,"opsSec":1766.7291281358832},{"name":"{...smallObject} - Total keys: 2","samples":21017457,"opsSec":42021345.475631304},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":530,"opsSec":1058.8353531123803},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3422,"opsSec":6843.748341685979},{"name":"{ ...bigObject, ...anotherBigObject }","samples":557,"opsSec":1112.2297439970216},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6129453,"opsSec":12252114.114053559},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14247093,"opsSec":28494182.067802873},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10521186,"opsSec":21028469.952343687}]}-->
