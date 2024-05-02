## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|910,044,693|99|
|Using dot notation|898,544,120|97|
|Using define property (writable)|4,743,463|96|
|Using define property initialized (writable)|6,507,189|98|
|Using define property (getter)|2,537,113|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 02 2024 22:17:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":910044693.4198556,"samples":6},{"name":"Using dot notation","opsSec":898544120.0241101,"samples":7},{"name":"Using define property (writable)","opsSec":4743463.0390396025,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6507188.904092951,"samples":5},{"name":"Using define property (getter)","opsSec":2537112.587213554,"samples":6}]}-->
