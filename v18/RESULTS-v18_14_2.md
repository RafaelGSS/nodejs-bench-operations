## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|411|85|
|Array.from|16|44|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 19:02:35 GMT+0000 (Coordinated Universal Time)
</details>


## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,481,648|95|
|Using replaceAll()|2,197,586|97|
|Using replaceAll(//g)|2,165,710|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Aug 26 2023 18:55:31 GMT+0000 (Coordinated Universal Time)
</details>

