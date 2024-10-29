## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|61,916,283|31140279|
|(short string) (true) String#slice and strict comparison|48,746,891|24373452|
|(long string) (true) String#endsWith|50,208,440|25107274|
|(long string) (true) String#slice and strict comparison|44,645,634|22331724|
|(short string) (false) String#endsWith|57,961,816|28996495|
|(short string) (false) String#slice and strict comparison|59,502,057|29753313|
|(long string) (false) String#endsWith|55,107,162|27557563|
|(long string) (false) String#slice and strict comparison|51,870,572|25935306|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:45:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":61916283.94534327,"samples":31140279},{"name":"(short string) (true) String#slice and strict comparison","opsSec":48746891.61828953,"samples":24373452},{"name":"(long string) (true) String#endsWith","opsSec":50208440.14325657,"samples":25107274},{"name":"(long string) (true) String#slice and strict comparison","opsSec":44645634.927411586,"samples":22331724},{"name":"(short string) (false) String#endsWith","opsSec":57961816.74387154,"samples":28996495},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59502057.67002033,"samples":29753313},{"name":"(long string) (false) String#endsWith","opsSec":55107162.904745944,"samples":27557563},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51870572.05965952,"samples":25935306}]}-->
