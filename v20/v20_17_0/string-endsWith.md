## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|58,644,793|29332386|
|(short string) (true) String#slice and strict comparison|60,435,075|30220352|
|(long string) (true) String#endsWith|49,879,928|24950137|
|(long string) (true) String#slice and strict comparison|56,418,524|28249068|
|(short string) (false) String#endsWith|57,184,188|28592100|
|(short string) (false) String#slice and strict comparison|59,895,544|29952633|
|(long string) (false) String#endsWith|53,193,835|26612231|
|(long string) (false) String#slice and strict comparison|55,136,391|27568211|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:39:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":58644793.00920721,"samples":29332386},{"name":"(short string) (true) String#slice and strict comparison","opsSec":60435075.3188251,"samples":30220352},{"name":"(long string) (true) String#endsWith","opsSec":49879928.475973934,"samples":24950137},{"name":"(long string) (true) String#slice and strict comparison","opsSec":56418524.159070276,"samples":28249068},{"name":"(short string) (false) String#endsWith","opsSec":57184188.44879393,"samples":28592100},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59895544.83328248,"samples":29952633},{"name":"(long string) (false) String#endsWith","opsSec":53193835.96810438,"samples":26612231},{"name":"(long string) (false) String#slice and strict comparison","opsSec":55136391.89553002,"samples":27568211}]}-->
