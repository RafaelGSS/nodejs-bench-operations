## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,543,791|8271896|
|Using dot notation|16,692,177|8346089|
|Using define property (writable)|3,218,839|1609420|
|Using define property initialized (writable)|3,963,717|1981859|
|Using define property (getter)|1,988,190|994096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:37:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16543791.768994715,"samples":8271896},{"name":"Using dot notation","opsSec":16692177.198183998,"samples":8346089},{"name":"Using define property (writable)","opsSec":3218839.8390401076,"samples":1609420},{"name":"Using define property initialized (writable)","opsSec":3963717.6195752667,"samples":1981859},{"name":"Using define property (getter)","opsSec":1988190.4174227482,"samples":994096}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.012ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.401ms
new Array(length)|10,000|0.161ms
array.push|1,000,000|31.453ms
new Array(length)|1,000,000|9.162ms
array.push|100,000,000|2,274.403ms
new Array(length)|100,000,000|4,541.177ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.015ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.448ms
new Array(length)|10,000|3.139ms
array.push|1,000,000|280.344ms
new Array(length)|1,000,000|4.661ms
array.push|100,000,000|2,663.582ms
new Array(length)|100,000,000|4,959.206ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|219|111|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:49:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":219.79583418432912,"samples":111},{"name":"Array.from","opsSec":22.26214641354449,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,046|2547|
|new Blob (1024)|689|345|
|text (128)|40,030|20016|
|text (1024)|26,403|13203|
|arrayBuffer (128)|44,850|22426|
|arrayBuffer (1024)|27,978|13990|
|slice (0, 64)|99,572|49787|
|slice (0, 512)|51,589|25795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:53:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5046.72604536095,"samples":2547},{"name":"new Blob (1024)","opsSec":689.3575642467631,"samples":345},{"name":"text (128)","opsSec":40030.81805042398,"samples":20016},{"name":"text (1024)","opsSec":26403.332049010543,"samples":13203},{"name":"arrayBuffer (128)","opsSec":44850.423686743714,"samples":22426},{"name":"arrayBuffer (1024)","opsSec":27978.732227972672,"samples":13990},{"name":"slice (0, 64)","opsSec":99572.35705597838,"samples":49787},{"name":"slice (0, 512)","opsSec":51589.762480270256,"samples":25795}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|292,177|146089|
|[True conditional] Using constructor name|303,260|151631|
|[True conditional] Check if property is valid then instanceof |307,473|153737|
|[False conditional] Using instanceof only|12,869,503|6434752|
|[False conditional] Using constructor name|17,139,781|8569891|
|[False conditional] Check if property is valid then instanceof |17,139,338|8569670|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:57:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":292177.787243563,"samples":146089},{"name":"[True conditional] Using constructor name","opsSec":303260.6280679862,"samples":151631},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":307473.10709401837,"samples":153737},{"name":"[False conditional] Using instanceof only","opsSec":12869503.88940832,"samples":6434752},{"name":"[False conditional] Using constructor name","opsSec":17139781.123059068,"samples":8569891},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":17139338.973156225,"samples":8569670}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,006|3504|
|crypto.verify('RSA-SHA256')|7,141|3571|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:03:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7006.685461603743,"samples":3504},{"name":"crypto.verify('RSA-SHA256')","opsSec":7141.3392834162405,"samples":3571}]}-->
