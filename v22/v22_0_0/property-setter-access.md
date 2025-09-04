## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|93,475,955|46737995|
|Setter|11,666,713|5833533|
|Method|92,080,179|46040113|
|DefineProperty (setter)|91,851,886|45925963|
|DefineProperty (setter & enumerable=false)|11,711,679|5856060|
|DefineProperty (setter & configurable=false)|11,802,598|5901637|
|DefineProperty (setter & enumerable=false & configurable=false)|11,560,582|5780407|
|DefineProperty (writable)|87,473,420|43736723|
|DefineProperty (writable & enumerable=false)|88,506,506|44253266|
|DefineProperty (writable & enumerable=false & configurable=false)|90,561,719|45280881|
|DefineProperties (setter)|90,720,494|45360521|
|DefineProperties (setter & enumerable=false)|11,653,719|5826865|
|DefineProperties (setter & enumerable=false & configurable=false)|11,555,153|5779415|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:57:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":46737995,"opsSec":93475955.97475204},{"name":"Setter","samples":5833533,"opsSec":11666713.361921921},{"name":"Method","samples":46040113,"opsSec":92080179.0391087},{"name":"DefineProperty (setter)","samples":45925963,"opsSec":91851886.3199851},{"name":"DefineProperty (setter & enumerable=false)","samples":5856060,"opsSec":11711679.617423026},{"name":"DefineProperty (setter & configurable=false)","samples":5901637,"opsSec":11802598.348454945},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5780407,"opsSec":11560582.279688787},{"name":"DefineProperty (writable)","samples":43736723,"opsSec":87473420.10786764},{"name":"DefineProperty (writable & enumerable=false)","samples":44253266,"opsSec":88506506.51012611},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45280881,"opsSec":90561719.97936194},{"name":"DefineProperties (setter)","samples":45360521,"opsSec":90720494.41109572},{"name":"DefineProperties (setter & enumerable=false)","samples":5826865,"opsSec":11653719.581574693},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5779415,"opsSec":11555153.843356274}]}-->
