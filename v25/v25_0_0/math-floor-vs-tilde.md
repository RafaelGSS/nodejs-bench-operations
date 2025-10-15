## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|93,257,894|46649494|
|~ (small)|94,225,990|47115450|
|Math.floor (long)|93,098,156|46549082|
|~ (long)|93,121,463|46570325|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:51:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":46649494,"opsSec":93257894.84121716},{"name":"~ (small)","samples":47115450,"opsSec":94225990.82587796},{"name":"Math.floor (long)","samples":46549082,"opsSec":93098156.55214748},{"name":"~ (long)","samples":46570325,"opsSec":93121463.99852946}]}-->
