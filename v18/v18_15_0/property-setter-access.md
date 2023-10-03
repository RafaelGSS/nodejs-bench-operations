## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|567,338,605|95|
|Setter|8,458,666|97|
|Method|581,792,156|97|
|DefineProperty (setter)|581,513,859|98|
|DefineProperty (setter & enumerable=false)|8,556,025|96|
|DefineProperty (setter & configurable=false)|8,709,028|93|
|DefineProperty (setter & enumerable=false & configurable=false)|8,680,881|99|
|DefineProperty (writable)|591,739,698|97|
|DefineProperty (writable & enumerable=false)|592,567,428|96|
|DefineProperty (writable & enumerable=false & configurable=false)|251,386,653|41|
|DefineProperties (setter)|81,927,670|74|
|DefineProperties (setter & enumerable=false)|8,758,732|97|
|DefineProperties (setter & enumerable=false & configurable=false)|8,675,321|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:38:45 GMT+0000 (Coordinated Universal Time)
</details>

