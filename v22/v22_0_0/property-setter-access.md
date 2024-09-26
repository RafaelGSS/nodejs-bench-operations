## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|128,821,512|64410895|
|Setter|11,585,356|5794620|
|Method|90,974,821|45497860|
|DefineProperty (setter)|92,352,992|46176521|
|DefineProperty (setter & enumerable=false)|11,803,353|5901682|
|DefineProperty (setter & configurable=false)|11,679,714|5839861|
|DefineProperty (setter & enumerable=false & configurable=false)|11,802,911|5901460|
|DefineProperty (writable)|93,021,655|46511143|
|DefineProperty (writable & enumerable=false)|85,515,467|42758844|
|DefineProperty (writable & enumerable=false & configurable=false)|93,961,325|46998619|
|DefineProperties (setter)|89,249,134|44624582|
|DefineProperties (setter & enumerable=false)|11,698,727|5849929|
|DefineProperties (setter & enumerable=false & configurable=false)|11,659,614|5829812|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:35:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":128821512.51846205,"samples":64410895},{"name":"Setter","opsSec":11585356.264190268,"samples":5794620},{"name":"Method","opsSec":90974821.44596708,"samples":45497860},{"name":"DefineProperty (setter)","opsSec":92352992.68350191,"samples":46176521},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11803353.825509002,"samples":5901682},{"name":"DefineProperty (setter & configurable=false)","opsSec":11679714.104513265,"samples":5839861},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11802911.690750169,"samples":5901460},{"name":"DefineProperty (writable)","opsSec":93021655.68526107,"samples":46511143},{"name":"DefineProperty (writable & enumerable=false)","opsSec":85515467.33434425,"samples":42758844},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":93961325.98120998,"samples":46998619},{"name":"DefineProperties (setter)","opsSec":89249134.19078918,"samples":44624582},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11698727.97307017,"samples":5849929},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11659614.066008814,"samples":5829812}]}-->
