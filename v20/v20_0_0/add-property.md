## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|105,190,738|52604718|
|Using dot notation|77,363,756|38681879|
|Using define property (writable)|4,548,113|2274063|
|Using define property initialized (writable)|5,979,285|2989650|
|Using define property (getter)|2,216,452|1108227|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:40:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":52604718,"opsSec":105190738.13591488},{"name":"Using dot notation","samples":38681879,"opsSec":77363756.9169074},{"name":"Using define property (writable)","samples":2274063,"opsSec":4548113.565457513},{"name":"Using define property initialized (writable)","samples":2989650,"opsSec":5979285.613838813},{"name":"Using define property (getter)","samples":1108227,"opsSec":2216452.5415742276}]}-->
