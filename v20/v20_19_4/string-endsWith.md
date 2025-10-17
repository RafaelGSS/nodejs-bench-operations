## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,251,709|27126094|
|(short string) (true) String#slice and strict comparison|65,192,474|32596243|
|(long string) (true) String#endsWith|50,898,873|25449506|
|(long string) (true) String#slice and strict comparison|59,971,307|30035597|
|(short string) (false) String#endsWith|58,666,746|29333381|
|(short string) (false) String#slice and strict comparison|63,587,871|31799514|
|(long string) (false) String#endsWith|55,096,743|27559083|
|(long string) (false) String#slice and strict comparison|58,432,192|29218033|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:16:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27126094,"opsSec":54251709.28291728},{"name":"(short string) (true) String#slice and strict comparison","samples":32596243,"opsSec":65192474.395739555},{"name":"(long string) (true) String#endsWith","samples":25449506,"opsSec":50898873.249671526},{"name":"(long string) (true) String#slice and strict comparison","samples":30035597,"opsSec":59971307.948448144},{"name":"(short string) (false) String#endsWith","samples":29333381,"opsSec":58666746.86397931},{"name":"(short string) (false) String#slice and strict comparison","samples":31799514,"opsSec":63587871.762250796},{"name":"(long string) (false) String#endsWith","samples":27559083,"opsSec":55096743.50457752},{"name":"(long string) (false) String#slice and strict comparison","samples":29218033,"opsSec":58432192.5299572}]}-->
