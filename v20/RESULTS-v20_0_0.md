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

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|232|117|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:39:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":232.1924753926441,"samples":117},{"name":"Array.from","opsSec":23.583588246839337,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|312,412|156207|
|[True conditional] Using constructor name|306,265|153133|
|[True conditional] Check if property is valid then instanceof |312,174|156088|
|[False conditional] Using instanceof only|12,504,221|6252111|
|[False conditional] Using constructor name|15,909,029|7954515|
|[False conditional] Check if property is valid then instanceof |15,961,782|7980908|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:52:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":312412.51819643093,"samples":156207},{"name":"[True conditional] Using constructor name","opsSec":306265.6205911244,"samples":153133},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":312174.66401309514,"samples":156088},{"name":"[False conditional] Using instanceof only","opsSec":12504221.385864828,"samples":6252111},{"name":"[False conditional] Using constructor name","opsSec":15909029.99241398,"samples":7954515},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15961782.054178255,"samples":7980908}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,713|3357|
|crypto.verify('RSA-SHA256')|6,863|3432|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:58:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6713.002491962647,"samples":3357},{"name":"crypto.verify('RSA-SHA256')","opsSec":6863.205005890635,"samples":3432}]}-->
