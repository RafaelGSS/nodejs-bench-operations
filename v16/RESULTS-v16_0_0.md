## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|404|84|
|Array.from|16|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 19:02:33 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,012,382|95|
|Using replaceAll()|1,915,035|98|
|Using replaceAll(//g)|1,777,835|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 18:55:34 GMT+0000 (Coordinated Universal Time)
</details>

