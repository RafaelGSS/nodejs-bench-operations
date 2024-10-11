## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|117,624,065|58812855|
|(short string) (true) String#slice and strict comparison|58,119,139|29118941|
|(long string) (true) String#endsWith|64,066,240|32033338|
|(long string) (true) String#slice and strict comparison|52,563,643|26281827|
|(short string) (false) String#endsWith|93,197,191|46602604|
|(short string) (false) String#slice and strict comparison|58,106,310|29053166|
|(long string) (false) String#endsWith|87,657,892|43839787|
|(long string) (false) String#slice and strict comparison|52,471,463|26236720|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:38:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":117624065.61556269,"samples":58812855},{"name":"(short string) (true) String#slice and strict comparison","opsSec":58119139.48355083,"samples":29118941},{"name":"(long string) (true) String#endsWith","opsSec":64066240.60582884,"samples":32033338},{"name":"(long string) (true) String#slice and strict comparison","opsSec":52563643.066762246,"samples":26281827},{"name":"(short string) (false) String#endsWith","opsSec":93197191.73674995,"samples":46602604},{"name":"(short string) (false) String#slice and strict comparison","opsSec":58106310.26823995,"samples":29053166},{"name":"(long string) (false) String#endsWith","opsSec":87657892.34627551,"samples":43839787},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52471463.190095775,"samples":26236720}]}-->
