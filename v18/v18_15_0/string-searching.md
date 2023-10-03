## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|713,010,680|90|
|Using indexof|702,977,876|89|
|Using RegExp.test|9,458,406|89|
|Using RegExp.text with cached regex pattern|9,917,229|88|
|Using new RegExp.test|2,417,973|85|
|Using new RegExp.test with cached regex pattern|2,786,906|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:05:18 GMT+0000 (Coordinated Universal Time)
</details>

