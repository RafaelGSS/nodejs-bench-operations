## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,839,813|7919907|
|(short string) (true) String#slice and strict comparison|16,156,356|8078179|
|(long string) (true) String#endsWith|14,195,962|7097982|
|(long string) (true) String#slice and strict comparison|16,095,015|8047508|
|(short string) (false) String#endsWith|15,981,334|7990668|
|(short string) (false) String#slice and strict comparison|16,174,615|8087308|
|(long string) (false) String#endsWith|15,647,256|7823629|
|(long string) (false) String#slice and strict comparison|16,156,313|8078157|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:37:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15839813.144665778,"samples":7919907},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16156356.869087815,"samples":8078179},{"name":"(long string) (true) String#endsWith","opsSec":14195962.126142437,"samples":7097982},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16095015.291887712,"samples":8047508},{"name":"(short string) (false) String#endsWith","opsSec":15981334.241903102,"samples":7990668},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16174615.67654759,"samples":8087308},{"name":"(long string) (false) String#endsWith","opsSec":15647256.56039214,"samples":7823629},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16156313.418372875,"samples":8078157}]}-->
