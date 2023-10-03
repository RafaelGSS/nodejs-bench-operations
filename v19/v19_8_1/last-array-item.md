## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|593,817,859|84|
|Length = 10_000 - Array.at|601,427,596|86|
|Length = 1_000_000 - Array.at|634,368,007|80|
|Length = 100 - Array[length - 1]|823,289,499|85|
|Length = 10_000 - Array[length - 1]|817,561,623|81|
|Length = 1_000_000 - Array[length - 1]|836,834,850|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:18:26 GMT+0000 (Coordinated Universal Time)
</details>

