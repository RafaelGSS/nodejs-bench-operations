## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,075,220|8037611|
|Using dot notation|16,112,841|8056421|
|Using define property (writable)|3,390,546|1695274|
|Using define property initialized (writable)|3,947,937|1973969|
|Using define property (getter)|2,011,045|1005523|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:23:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16075220.076019175,"samples":8037611},{"name":"Using dot notation","opsSec":16112841.669622328,"samples":8056421},{"name":"Using define property (writable)","opsSec":3390546.1132663186,"samples":1695274},{"name":"Using define property initialized (writable)","opsSec":3947937.098271432,"samples":1973969},{"name":"Using define property (getter)","opsSec":2011045.5588870256,"samples":1005523}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.024ms
new Array(length)|100|0.007ms
array.push|1,000|0.08ms
new Array(length)|1,000|0.044ms
array.push|10,000|0.297ms
new Array(length)|10,000|0.328ms
array.push|1,000,000|31.709ms
new Array(length)|1,000,000|7.276ms
array.push|100,000,000|2,035.353ms
new Array(length)|100,000,000|4,723.197ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.016ms
array.push|100|0.03ms
new Array(length)|100|0.013ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.225ms
new Array(length)|10,000|0.26ms
array.push|1,000,000|26.226ms
new Array(length)|1,000,000|4.373ms
array.push|100,000,000|2,805.041ms
new Array(length)|100,000,000|4,285.07ms
