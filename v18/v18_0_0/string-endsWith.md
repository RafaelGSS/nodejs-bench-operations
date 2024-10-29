## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|60,308,133|30158027|
|(short string) (true) String#slice and strict comparison|46,838,187|23419101|
|(long string) (true) String#endsWith|46,900,188|23450383|
|(long string) (true) String#slice and strict comparison|44,036,572|22019177|
|(short string) (false) String#endsWith|57,003,329|28504097|
|(short string) (false) String#slice and strict comparison|54,791,881|27398430|
|(long string) (false) String#endsWith|50,158,508|25079267|
|(long string) (false) String#slice and strict comparison|48,825,966|24415328|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:45:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":60308133.73279686,"samples":30158027},{"name":"(short string) (true) String#slice and strict comparison","opsSec":46838187.57383823,"samples":23419101},{"name":"(long string) (true) String#endsWith","opsSec":46900188.283480726,"samples":23450383},{"name":"(long string) (true) String#slice and strict comparison","opsSec":44036572.016076796,"samples":22019177},{"name":"(short string) (false) String#endsWith","opsSec":57003329.90585913,"samples":28504097},{"name":"(short string) (false) String#slice and strict comparison","opsSec":54791881.28091552,"samples":27398430},{"name":"(long string) (false) String#endsWith","opsSec":50158508.41916071,"samples":25079267},{"name":"(long string) (false) String#slice and strict comparison","opsSec":48825966.168297604,"samples":24415328}]}-->
