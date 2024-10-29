## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|111,693,599|56088955|
|(short string) (true) String#slice and strict comparison|59,265,544|29637282|
|(long string) (true) String#endsWith|62,732,661|31366352|
|(long string) (true) String#slice and strict comparison|53,692,569|26846294|
|(short string) (false) String#endsWith|96,674,201|48351590|
|(short string) (false) String#slice and strict comparison|59,439,353|29719678|
|(long string) (false) String#endsWith|89,338,837|44673021|
|(long string) (false) String#slice and strict comparison|53,599,009|26799550|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:48:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":111693599.18216857,"samples":56088955},{"name":"(short string) (true) String#slice and strict comparison","opsSec":59265544.37680129,"samples":29637282},{"name":"(long string) (true) String#endsWith","opsSec":62732661.96911649,"samples":31366352},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53692569.959296495,"samples":26846294},{"name":"(short string) (false) String#endsWith","opsSec":96674201.13481623,"samples":48351590},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59439353.503547154,"samples":29719678},{"name":"(long string) (false) String#endsWith","opsSec":89338837.18013677,"samples":44673021},{"name":"(long string) (false) String#slice and strict comparison","opsSec":53599009.41767409,"samples":26799550}]}-->
