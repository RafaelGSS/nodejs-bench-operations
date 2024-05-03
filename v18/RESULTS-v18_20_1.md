## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,194,930|97|
|Using dot notation|909,618,119|96|
|Using define property (writable)|4,597,368|96|
|Using define property initialized (writable)|6,333,403|92|
|Using define property (getter)|2,568,937|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:13:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912194930.0470653,"samples":6},{"name":"Using dot notation","opsSec":909618119.3453944,"samples":6},{"name":"Using define property (writable)","opsSec":4597367.817724662,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6333403.29427827,"samples":5},{"name":"Using define property (getter)","opsSec":2568937.146117732,"samples":6}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.087ms
new Array(length)|100|0.007ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.277ms
new Array(length)|10,000|0.17ms
array.push|1,000,000|27.374ms
new Array(length)|1,000,000|15.675ms
array.push|100,000,000|2,097.062ms
new Array(length)|100,000,000|4,242.198ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.072ms
new Array(length)|100|0.009ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.491ms
new Array(length)|10,000|3.087ms
array.push|1,000,000|255.431ms
new Array(length)|1,000,000|4.631ms
array.push|100,000,000|2,612.482ms
new Array(length)|100,000,000|4,647.079ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|213|90|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:30:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":213.32984953765558,"samples":2},{"name":"Array.from","opsSec":22.227805136064536,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|911,584,628|98|
|[async] async function|17,949,683|88|
|[async] function|375,729|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:35:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":911584628.1527041,"samples":6},{"name":"[async] async function","opsSec":17949682.752275303,"samples":6},{"name":"[async] function","opsSec":375729.40531532036,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,730|92|
|new Blob (1024)|742|79|
|text (128)|38,086|68|
|text (1024)|25,276|78|
|arrayBuffer (128)|42,855|76|
|arrayBuffer (1024)|25,457|80|
|slice (0, 64)|95,881|81|
|slice (0, 512)|46,825|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:44:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5729.898676544437,"samples":5},{"name":"new Blob (1024)","opsSec":742.4077273862412,"samples":2},{"name":"text (128)","opsSec":38085.552240823345,"samples":5},{"name":"text (1024)","opsSec":25276.10925766244,"samples":5},{"name":"arrayBuffer (128)","opsSec":42855.069853772584,"samples":5},{"name":"arrayBuffer (1024)","opsSec":25457.269957829416,"samples":3},{"name":"slice (0, 64)","opsSec":95881.17814201184,"samples":4},{"name":"slice (0, 512)","opsSec":46825.3703275163,"samples":3}]}-->
