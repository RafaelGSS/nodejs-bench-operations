## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,178,365|8089183|
|Using dot notation|15,951,208|7975605|
|Using define property (writable)|3,744,789|1872395|
|Using define property initialized (writable)|4,583,216|2291609|
|Using define property (getter)|2,222,604|1111303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:28:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16178365.741142044,"samples":8089183},{"name":"Using dot notation","opsSec":15951208.18155222,"samples":7975605},{"name":"Using define property (writable)","opsSec":3744789.9325976954,"samples":1872395},{"name":"Using define property initialized (writable)","opsSec":4583216.46919301,"samples":2291609},{"name":"Using define property (getter)","opsSec":2222604.7242289037,"samples":1111303}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.007ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.303ms
new Array(length)|10,000|0.146ms
array.push|1,000,000|22.084ms
new Array(length)|1,000,000|15.495ms
array.push|100,000,000|2,031.292ms
new Array(length)|100,000,000|4,062.013ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.023ms
array.push|100|0.015ms
new Array(length)|100|0.01ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.498ms
new Array(length)|10,000|0.226ms
array.push|1,000,000|17.753ms
new Array(length)|1,000,000|8.079ms
array.push|100,000,000|2,618.745ms
new Array(length)|100,000,000|4,050.317ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|248|125|
|Array.from|25|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:41:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":248.4535110585566,"samples":125},{"name":"Array.from","opsSec":25.04038990814886,"samples":13}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|328,931|164466|
|[True conditional] Using constructor name|329,871|164936|
|[True conditional] Check if property is valid then instanceof |335,891|167946|
|[False conditional] Using instanceof only|16,180,357|8090179|
|[False conditional] Using constructor name|16,115,136|8057569|
|[False conditional] Check if property is valid then instanceof |16,176,914|8088458|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:57:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":328931.85329639114,"samples":164466},{"name":"[True conditional] Using constructor name","opsSec":329871.90961514344,"samples":164936},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":335891.8018238758,"samples":167946},{"name":"[False conditional] Using instanceof only","opsSec":16180357.546918271,"samples":8090179},{"name":"[False conditional] Using constructor name","opsSec":16115136.291759301,"samples":8057569},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16176914.058815088,"samples":8088458}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,242|3622|
|crypto.verify('RSA-SHA256')|7,165|3583|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:03:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7242.302954602438,"samples":3622},{"name":"crypto.verify('RSA-SHA256')","opsSec":7165.489616505496,"samples":3583}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,043,950|521976|
|Using brackets {}|1,045,896|522949|
|Using '' + |1,029,648|514825|
|Using date.toString()|1,178,988|589495|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:17:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1043950.3505581897,"samples":521976},{"name":"Using brackets {}","opsSec":1045896.2889134465,"samples":522949},{"name":"Using '' + ","opsSec":1029648.3196139256,"samples":514825},{"name":"Using date.toString()","opsSec":1178988.8823181011,"samples":589495}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,328,668|1664335|
|Using delete property (proto: null)|8,394,029|4197015|
|Using delete property (cached proto: null)|3,298,887|1649444|
|Using undefined assignment|16,178,851|8089426|
|Using undefined assignment (proto: null)|8,698,690|4349346|
|Using undefined property (cached proto: null)|16,225,943|8112972|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:25:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3328668.4954424356,"samples":1664335},{"name":"Using delete property (proto: null)","opsSec":8394029.19417387,"samples":4197015},{"name":"Using delete property (cached proto: null)","opsSec":3298887.30063832,"samples":1649444},{"name":"Using undefined assignment","opsSec":16178851.611706782,"samples":8089426},{"name":"Using undefined assignment (proto: null)","opsSec":8698690.173274318,"samples":4349346},{"name":"Using undefined property (cached proto: null)","opsSec":16225943.57812863,"samples":8112972}]}-->
