## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|11,800,660|96|
|Using indexof|595,727,402|98|
|Using RegExp.test|10,929,973|93|
|Using RegExp.text with cached regex pattern|11,499,792|98|
|Using new RegExp.test|3,461,295|93|
|Using new RegExp.test with cached regex pattern|4,125,262|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:05:10 GMT+0000 (Coordinated Universal Time)
</details>

