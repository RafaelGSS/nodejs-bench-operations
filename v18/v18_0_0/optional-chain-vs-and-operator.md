## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|20,789,950|10394976|
|Using optional chain (obj.field?.field2) (undefined)|21,091,482|10545742|
|Using and operator (obj.field && obj.field.field2) (Valid)|21,072,065|10536033|
|Using and operator (obj.field && obj.field.field2) (undefined)|21,089,873|10544938|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:12:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":20789950.35437214,"samples":10394976},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":21091482.260103974,"samples":10545742},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":21072065.15597273,"samples":10536033},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":21089873.95854358,"samples":10544938}]}-->
