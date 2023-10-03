## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|9,633,198|84|
|Using indexof|596,143,742|93|
|Using RegExp.test|8,826,826|94|
|Using RegExp.text with cached regex pattern|9,259,597|93|
|Using new RegExp.test|2,584,014|92|
|Using new RegExp.test with cached regex pattern|3,072,830|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 02:05:15 GMT+0000 (Coordinated Universal Time)
</details>

