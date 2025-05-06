## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|86,430,303|43228817|
|Using dot notation|61,654,473|30835524|
|Using define property (writable)|4,762,459|2381233|
|Using define property initialized (writable)|7,058,503|3532568|
|Using define property (getter)|2,386,388|1196782|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:01:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":43228817,"opsSec":86430303.35519423},{"name":"Using dot notation","samples":30835524,"opsSec":61654473.55118418},{"name":"Using define property (writable)","samples":2381233,"opsSec":4762459.637353925},{"name":"Using define property initialized (writable)","samples":3532568,"opsSec":7058503.92852781},{"name":"Using define property (getter)","samples":1196782,"opsSec":2386388.1261319453}]}-->
