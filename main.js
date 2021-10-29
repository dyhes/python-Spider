let myframe = document.getElementById("myframe")
let lst = ['BV1FX4y1g7u8', 'BV1kK4y1A7tN', 'BV1J64y1z78d', 'BV1fL411H7gdq', 'BV1Mh411Y7vS', 'BV1v64y167gA',
    'BV1L64y1z7Df', 'BV1cb4y1S7rf', 'BV1Pf4y1P7Hz', 'BV18f4y1a7xi', 'BV1SP4y1W7hu', 'BV1cL411W7MD',
    'BV1u54y1L7DJ', 'BV1o44y1dq75y', 'BV1FM4y1u7Gh', 'BV1rdq4y1H7PR', 'BV1Sdq4y1K7e4', 'BV18h411z7gh',
    'BV1864y197od', 'BV1gg41177nC', 'BV1hg411T7LR', 'BV1dqT4y1P7i5', 'BV1kdq4y1W7hW', 'BV1JU4y1t7Jr',
    'BV1vp4y1475K', 'BV1QQ4y1272S', 'BV1g64y1dq7ab', 'BV1kf4y137fm', 'BV1dq54y177dqj', 'BV19dq4y1D7kx',
    'BV1dL411n7sY', 'BV1mdq4y1Q7ea', 'BV1Th411y7XE', 'BV1P64y1v7pU', 'BV1HB4y1g7PA', 'BV19K4y1278Y',
    'BV19h411Q7fW', 'BV1yK4y1g7yu', 'BV1nU4y1H7fg', 'BV1YM4y1L7GM', 'BV1k5411K7ad', 'BV1Gdq4y1W7wT',
    'BV1Xh41187Es', 'BV14Q4y1m75o', 'BV1f5411N7tR', 'BV1QX4y137vL', 'BV11dq4y1s7fk', 'BV1664y1b7SD',
    'BV1F5411T7EE', 'BV1gP4y1x7gw', 'BV1yL411b7dU', 'BV11dq4y1n7ZN', 'BV1s64y1x7S9', 'BV14K4y197z9',
    'BV1yL4y1e7fj', 'BV1RL411n7Dy', 'BV1wg411L7LB', 'BV1E64y1v76b', 'BV1SP4y1p78u', 'BV1Ew411f7yt',
    'BV1c64y1U7VH', 'BV1so4y1U7zk', 'BV17o4y1k71f', 'BV14h411B7mE', 'BV1Rh411H7vk', 'BV1vy4y1V7f7',
    'BV1xP4y147L1', 'BV14o4y1D731', 'BV14y4y1M7cQ', 'BV1Zg411V74S', 'BV1Qv411776m', 'BV1ay4y1K7oW',
    'BV1GM4y1T7Hn', 'BV1FZ4y1F7HH', 'BV1rV411i7X6', 'BV1eM4y1M7r2', 'BV1wU4y1n72n', 'BV15b4y1C7Y7',
    'BV1hL411n7Q2', 'BV12X4y1G7Ak', 'BV1vK4y1M71X', 'BV173411B77c', 'BV1Ph411B7ko', 'BV16g411u7LX',
    'BV1k5411E7YU', 'BV1WV411Y7SZ', 'BV1cv411J7Jd', 'BV17U4y177vt', 'BV15p4y1H7Gm', 'BV1kv411N7dr',
    'BV1964y167gT', 'BV1a64y1i7Ta', 'BV11v411A7XL', 'BV15U4y1H7mM', 'BV1V3411z71Q', 'BV12Q4y1y7Hi',
    'BV1ow411f7TK', 'BV1dqb4y1o7aT', 'BV1SL411p73n', 'BV1bM4y1L7aw', 'BV15h411i7sC', 'BV1Gf4y1N7G1',
    'BV1xb4y1d7nZ', 'BV1tM4y1T7vw', 'BV1DA411w7yf', 'BV1zv411Y7Rg', 'BV1TL4y1Y7nC', 'BV1ev411p7VZ',
    'BV1dqdq4y1n75k', 'BV1Fy4y1p7UA', 'BV1L64y1s7rC', 'BV1mQ4y1h72T', 'BV1G44y1k7na', 'BV1gy4y147ZA',
    'BV1Hy4y1M7j9', 'BV1TK4y1u7Yv', 'BV1T34y1Q7ZL', 'BV1bz4y1z7uu', 'BV1XL411t7Cv', 'BV1zA411w7T7',
    'BV1Hh411s7HN', 'BV1gdq4y1M7Cu', 'BV1mN411X7dqT', 'BV1u64y1Y7tb', 'BV1L64y1d74k', 'BV1WA411w7Fc',
    'BV1Ldq4y1j7X3', 'BV13y4y1j7jE', 'BV1X44y1C7LW', 'BV18f4y1H7os', 'BV1YU4y177dR', 'BV1Fdq4y1p7QK',
    'BV1VK4y1A74k', 'BV1edq4y1S7kS', 'BV1nh411B77U', 'BV1tK4y1M7nm', 'BV18L411E71d', 'BV1YL411W798',
    'BV18L411b7cV', 'BV1Uy4y1G7JW', 'BV1Uy4y1G7JW', 'BV15dq4y1Q7u1', 'BV1Zf4y1n7Ay', 'BV1aP4y1471Z',
    'BV1VP4y1t7fs', 'BV1xM4y1L7oL', 'BV1AA411F7GD', 'BV1U64y1Y7J3', 'BV1WL4y1e7VF', 'BV1ay4y1W7Ef',
    'BV14X4y1w7QZ', 'BV1W64y167X9', 'BV11P4y1x7KP', 'BV1Hf4y1G7nB', 'BV19A411G7uE', 'BV1Yv41177Ty',
    'BV1Uf4y1L7gg', 'BV1YU4y1G7cK', 'BV14K411c7L1', 'BV1gA411c7Zr', 'BV1yU4y177KW', 'BV1jV41177xy',
    'BV1SU4y1j7Mj', 'BV15L411x7tM', 'BV14dq4y1n7LU', 'BV14V411s74v', 'BV1VV41147S4', 'BV13M4y1G7YY',
    'BV1F44y1dq7n7', 'BV1sU4y1E7EG', 'BV1vdq4y1j7br', 'BV1hv411p7Fc', 'BV1v44y1k78p', 'BV1zL4y1e7jj',
    'BV1cy4y1G7vb', 'BV1dqv411n7tz', 'BV1E64y1x7uH', 'BV1R64y1W7XL', 'BV1X44y1B7yU', 'BV1Sy4y137cF',
    'BV1Kh411dq7Hj', 'BV1Xh411m7QV', 'BV1if4y1P7Ay', 'BV1pQ4y1h7y8', 'BV1x44y117jg', 'BV15b4y1S7un',
    'BV1564y1173Q', 'BV1if4y1J7o5', 'BV1tA411c7Ci', 'BV1854y1J7dqm', 'BV1idq4y1T7y3', 'BV1B54y1V7Ta',
    'BV1864y1a7e3', 'BV11Q4y127sJ', 'BV1W64y1B7dk', 'BV1hb4y1U7Zu', 'BV1SV41177Sp', 'BV1Wf4y1p71Y',
    'BV1s44y1r749', 'BV1b44y1r7Pr', 'BV183411B7nB', 'BV1Nf4y1N7xt', 'BV15dq4y1T7uz', 'BV1HX4y1w7Rj',
    'BV11A411N7cu', 'BV1Py4y137Jd', 'BV1oy4y1g73W', 'BV1P3411dq7os', 'BV11f4y1p7ni', 'BV1TM4y1G7Qc',
    'BV1bdq4y1S7Cj', 'BV1ty4y1V7k4', 'BV1uo4y1D7BJ', 'BV1o3411z7T9', 'BV1hV411n7Xp', 'BV1Eb4y1U7y1',
    'BV1K3411r7vH', 'BV1WL4y1Y74c', 'BV1Vv411E78j', 'BV1Adq4y1L7Fv', 'BV1nA411c7w8', 'BV1tP4y1p77u',
    'BV11v411h7fX', 'BV19A411c7Lr', 'BV1wb4y1y72m', 'BV1Fh411v7XZ', 'BV1hM4y1V7Tw', 'BV1dqv411n7h3',
    'BV1Z3411dq7ib', 'BV1WL411t7zr', 'BV1664y1a7h5', 'BV1Pv411J74B', 'BV1gh41167PU', 'BV1QM4y1M7Mo',
    'BV1gL411t7ki', 'BV12dq4y1T7tL', 'BV1DU4y15767', 'BV1DL411E7dJ', 'BV1bo4y1k7Y7', 'BV13M4y1K7Cu',
    'BV1Tf4y1N7hH', 'BV1964y1X7UP', 'BV1Mh411z7EP', 'BV1vL411H7tK', 'BV1sA411c7hdq', 'BV1Uf4y1N7cj',
    'BV1z44y1k7Ng', 'BV1JL411t7Wb', 'BV1Sf4y1A7Ee', 'BV1Ydq4y1T74L', 'BV14f4y1H72r', 'BV1L54y1n7yA',
    'BV19Q4y1h7ys', 'BV19Q4y1h7Yc', 'BV1sV41177dqM', 'BV1Lo4y1Q7GP', 'BV1dq44y1k72X', 'BV1Zb4y1174N',
    'BV1ML411p7GB', 'BV1Lb4y167rK', 'BV1PU4y1G7F1', 'BV18Q4y1179dq', 'BV1B64y1Q7Pz', 'BV1g44y117Eh',
    'BV1WZ4y1P7E3', 'BV16Q4y1Y7Ex', 'BV1Lf4y1A75W', 'BV1tQ4y1h7PT', 'BV1Kdq4y1p7xf', 'BV1Zdq4y1f7HS',
    'BV1pX4y1P7wX', 'BV1GX4y1c7sB', 'BV1GL411H7nF', 'BV1xdq4y1T74u', 'BV18U4y1n7oK', 'BV1C64y1a7xN',
    'BV1E3411r73n', 'BV1Cdq4y1X7me', 'BV18y4y1T7mz', 'BV1fQ4y1f72g', 'BV1db4y1z75n', 'BV1r54y1J7Hz',
    'BV1Mdq4y1M7XA', 'BV1W54y1V7bV', 'BV1e64y1B7JC', 'BV1uL4y1Y7dC', 'BV1p54y17773', 'BV1U54y1E7RT',
    'BV1af4y1A7Bw', 'BV18h411dq7c7', 'BV1Xo4y1C7N2', 'BV1f64y1i7Mv', 'BV1x44y117o2', 'BV1Sy4y1K7Hd',
    'BV1AU4y1E7bR', 'BV1nv411J71o', 'BV1RL411n79X', 'BV1B64y1Y71w', 'BV1FP4y1W7BR', 'BV1MP4y1Y7dqZ',
    'BV1XX4y1F7Vk', 'BV1cy4y157if', 'BV1YA411c7n2', 'BV18B4y1T7Qh', 'BV1EM4y1g797', 'BV1Ag411G7kX',
    'BV1Uf4y1N7dz', 'BV15o4y1C76c', 'BV1rA411M7w7', 'BV1Jh411B7nh', 'BV1Xp4y1t7Vs', 'BV1Fv411P7Yh',
    'BV17341167uu', 'BV1ew411d7dH', 'BV1zM4y1K7rm', 'BV1sdq4y1U7me', 'BV1Mb4y1Z7ZR', 'BV11Q4y1f7EF',
    'BV1Vb4y167za', 'BV1Vy4y1T7Ru', 'BV11L411J7fz', 'BV1sM4y1T7fT', 'BV1tX4y1A78H', 'BV1Xp4y1t7yt',
    'BV1EB4y1F7Uw', 'BV1Ydq4y1Q7cE', 'BV1TX4y1F78e', 'BV1E54y1j7zo', 'BV1dL41147GF', 'BV17h411dq7o2',
    'BV1d3411z77k', 'BV12y4y1L7pE', 'BV1J64y1m7Eu', 'BV1gM4y1L77o', 'BV1fy4y1K7cy', 'BV1ay4y1h7Zh',
    'BV1bh411h71a', 'BV1v5411K7iv', 'BV1w44y1C7yM', 'BV1j44y1y7UU', 'BV11Z4y1w7vF', 'BV1hz4y1S7Nh',
    'BV1Qv41177hV', 'BV1M3411B7aE', 'BV1zX4y1c7bn', 'BV1dqB4y1N7vn', 'BV1e3411z77C', 'BV14Q4y1a7jy',
    'BV1W54y1G7fW', 'BV1jB4y1N7SV', 'BV1Rg411g7J3', 'BV15dq4y1p7J6', 'BV1oX4y1A7GS', 'BV1w54y177PU',
    'BV1bb4y1U71D', 'BV1U64y1Y7V5', 'BV1j54y177x4', 'BV1gA41137sR', 'BV1tb4y1U7Dz', 'BV1aU4y1V7vG',
    'BV1fX4y1g7ZZ', 'BV1n3411B7XU', 'BV1JK4y1Z7Ps', 'BV1mL4y1Y71f', 'BV1Hv411W79Z', 'BV1oy4y157NB',
    'BV1v44y117Ug', 'BV1uU4y1p7UG', 'BV1844y127Pp', 'BV1aw411R7f3', 'BV1Qf4y1n7vdq', 'BV18b4y1S7tx',
    'BV14dq4y1D7Sd', 'BV1MQ4y1R7jJ', 'BV1kA411c7wa', 'BV1zf4y187T6', 'BV1fg411g7uf', 'BV1uQ4y1m7zf',
    'BV1T64y1b7DG', 'BV19U4y1n7Ko', 'BV1gM4y1T71f', 'BV1sh411B7dqZ', 'BV1QA411c7QT', 'BV1g64y1m7Fy',
    'BV1k64y1U7Gf', 'BV17B4y1M7V8', 'BV1DQ4y1C7i2', 'BV1eA411A73H', 'BV1j44y1B73s', 'BV1C64y1Q7U9',
    'BV1co4y117B7', 'BV1sV411x7o5', 'BV1C54y137FA', 'BV1zL4y1a7Ej', 'BV1AX4y1F7V3', 'BV1G44y127d7',
    'BV12v411p78B', 'BV1n3411B7H6', 'BV1XK4y1E782', 'BV1Ww411R7vL', 'BV1Ww411R7vL', 'BV15K4y1M78W',
    'BV1SK4y1A7sZ', 'BV1ch411Q7bt', 'BV1XP4y1p74Q', 'BV1Ai4y1N7Dd', 'BV1eU4y1H75W', 'BV1zh411z7UH',
    'BV1RP4y1x7wp', 'BV1Ldq4y177ci', 'BV1sf4y1a7ak', 'BV1eK4y1n7o3', 'BV1R64y127dP', 'BV1CU4y1t7L9',
    'BV1Gh411B7Gn', 'BV1oA411w7dqB', 'BV1D44y1k7WR', 'BV1GU4y147Ev', 'BV1YL411E7y2', 'BV13o4y1U7Du',
    'BV1Zb4y1U7Dv', 'BV1PM4y1L72Q', 'BV15w411Z7SQ', 'BV1J64y1R73V', 'BV1x64y1Q7w1', 'BV1kb4y1U795',
    'BV18K4y1u7wg', 'BV13h411W7TY', 'BV1kA411P76D', 'BV1ut4y1B7xh', 'BV1QX4y1c7b1', 'BV1iL4y1Y7jF',
    'BV1Ky4y1D7hx', 'BV1iQ4y1h7KJ', 'BV1Yy4y1V7X1', 'BV1gP4y1W7Gp', 'BV1mv411P76F', 'BV1dqZ4y1w7TV',
    'BV1dq64y1x7is', 'BV15V411W7z7', 'BV12V411E7sn', 'BV1dqb4y1z7Yr', 'BV1AU4y1V7L1', 'BV1S64y117gk',
    'BV1py4y1M7SA', 'BV1Jg41137Va', 'BV1TP4y147Bi', 'BV1ng411g7mY', 'BV1kU4y1377k', 'BV1E64y1x7RE',
    'BV1Vg411V7cV', 'BV1Fv411J7dq3', 'BV14A411P7LV', 'BV1Rf4y1t7LQ', 'BV1Ldq4y1p71d', 'BV1zM4y137So',
    'BV1P44y187iJ', 'BV1BZ4y1w7Lb', 'BV1d64y1t76v', 'BV1wf4y1L7pZ', 'BV1EL411p7Ro', 'BV1Lb4y1o7hdq',
    'BV1Vdq4y1L7DU', 'BV11U4y1J7Lo', 'BV1954y1E7gw', 'BV1mV41147bH', 'BV15o4y1U7Xs', 'BV1z64y117j1',
    'BV1GL411H7dU', 'BV1vA41157hd', 'BV1xQ4y1h7DD', 'BV1dqh411z7Sn', 'BV1R3411z7SK', 'BV1754y1p7Ro',
    'BV1cX4y1w7yr', 'BV1bM4y1G7NN', 'BV1Yy4y137rE', 'BV1Mdq4y1S7ue', 'BV1PA411F7ce', 'BV1Ef4y1N7mX',
    'BV1m54y1b7Fu', 'BV1HU4y1x7QP', 'BV1oX4y1F7S8', 'BV1RL41147t1', 'BV1Z5411c7XY', 'BV1j54y1H79C',
    'BV1dA41137pU', 'BV1s5411M7X1', 'BV1iU4y1J7sm', 'BV1d64y1Z7ai', 'BV1mg411g7mS', 'BV1Di4y1N7LV',
    'BV1UX4y1F7b5', 'BV1v54y1J7Fd', 'BV1GB4y1K7bk', 'BV1b3411i7KA', 'BV1kdq4y1E76D', 'BV1oL4y1Y7tv',
    'BV1744y1z7ddq', 'BV1H64y1b7mV', 'BV1H64y1b7mV', 'BV1gb4y1o71J', 'BV1Qg411g7Hr', 'BV14K4y137WA',
    'BV1DQ4y1h763', 'BV1Nb4y1k7nj', 'BV1Mf4y1L7JT', 'BV1g64y1h77i', 'BV133411dq7Yx', 'BV1mN411Z7Dg',
    'BV1E64y1Y7ii', 'BV1Qw411d7h1', 'BV18b4y1C7bt', 'BV1Xb4y1m7JP', 'BV1U64y1e7SG', 'BV1ZX4y1G71t',
    'BV1bb4y197sh', 'BV13L4y1Y7bF', 'BV1a64y1B7DF', 'BV1iB4y1T76z', 'BV1iB4y1T76z', 'BV1uU4y1N7Vr',
    'BV1e64y1Q7r7', 'BV1aQ4y197Vw', 'BV18v411L7f6', 'BV1Cw411d7Xf', 'BV1UV411p7dq9', 'BV1Uo4y1k7b5',
    'BV1av411N7Ddq', 'BV1Dv411p7sd', 'BV1Sv411j7zE', 'BV1cP4y1x7ZX', 'BV1564y1e7ss', 'BV1dqA411M741',
    'BV16g411V7RY', 'BV1Ly4y1V73N', 'BV1HA411c7aj', 'BV1r3411i7Dy', 'BV1nA411V7B9', 'BV1sA411A7C5',
    'BV17h411e7sD', 'BV1av411j7dqw', 'BV1A64y1Y7Sr', 'BV1E54y1p7mL', 'BV1ag411g7r2', 'BV1f64y1dq7s5',
    'BV1xo4y1f7vs', 'BV11L411J74X', 'BV1Jy4y1579K', 'BV1Cv411P7AC', 'BV1xf4y15773', 'BV13dq4y1W7SC',
    'BV16K411u7oe', 'BV1oX4y1g76h', 'BV1R54y1H7Gy', 'BV12dq4y1n7oC', 'BV1xdq4y1j7gx', 'BV1Ub4y1C75r',
    'BV1tM4y1G7dA', 'BV1io4y1C7su', 'BV1Nv411P7oJ', 'BV1LU4y1H72w', 'BV1ao4y117t7', 'BV1Zdq4y177nA',
    'BV1Yw411d7M2', 'BV1Tf4y1P7VG', 'BV1f64y1s7zJ', 'BV1yX4y1w7oY', 'BV1YM4y1T7eY', 'BV1iX4y1c7Vv',
    'BV1NU4y1s79m', 'BV1ph411B7dz', 'BV1544y1k7aX', 'BV1L44y1B7Uy', 'BV1Cw411d7PM', 'BV1QL4y1Y7m9',
    'BV1aZ4y1A7GF', 'BV1Ddq4y1E7gS', 'BV1b64y1d7wg', 'BV1B54y1H78x', 'BV1Qy4y1g7ZU', 'BV1Ff4y1V783',
    'BV1oh411h7Yr', 'BV1dL411b7Md', 'BV1s5411M7wS', 'BV1xy4y1K7NY', 'BV1Uf4y1W7NC', 'BV1Ho4y1D7BD',
    'BV1fK4y1u7Dk', 'BV1zy4y1L7H4', 'BV1Ht4y167eF', 'BV12g411V768', 'BV1zL411H79c', 'BV1ndq4y1n7vN',
    'BV1gv411L7H6', 'BV1MV411J7To', 'BV1MM4y1M7ch', 'BV1Gy4y1G762', 'BV17g411j76h', 'BV1mA411P7ug',
    'BV1Jg411L7R9', 'BV1Jw411f7uh', 'BV1Ay4y1T7YF', 'BV12L4y1a7SH', 'BV16M4y1K7tp', 'BV1JU4y147bL',
    'BV14w411f7fW', 'BV1fv41157Pn', 'BV1N54y1b73J', 'BV1vdq4y1772e', 'BV1yo4y117XF', 'BV1t64y1W7oG',
    'BV1FP4y1x7dqr', 'BV19b4y1d7RF', 'BV17N41197FK', 'BV1wv411w792', 'BV19h41187R6', 'BV1L64y1X7sx',
    'BV1YU4y1V7WK', 'BV1Cf4y157pP', 'BV1p341167Vv', 'BV1gf4y1L7oH', 'BV1H44y187Gd', 'BV1p54y1H7TZ',
    'BV1PA411T7EU', 'BV1nP4y147MC', 'BV1EM4y1K7mL', 'BV183411r7bT', 'BV1AM4y1N7wf', 'BV1AU4y1G7Bv',
    'BV1pB4y1K7k9', 'BV1b44y1B7J3', 'BV1D44y1B7JF', 'BV17h411dq7xm', 'BV1g44y1k7Y9', 'BV13f4y1N712',
    'BV1B5411N7Go', 'BV11B4y1N7ct', 'BV12dq4y1J7gW', 'BV1eB4y1u7VF', 'BV1fdq4y1L7Y6', 'BV1fdq4y1m7A6',
    'BV1UP4y1x72z', 'BV17y4y1j7Bf', 'BV1Py4y1M7xZ', 'BV1fdq4y1S7YP', 'BV1a64y127o9', 'BV1oy4y1t73c',
    'BV1m44y1dq7r5', 'BV1Ef4y187iJ', 'BV1df4y147Lt', 'BV12y4y1372A', 'BV1JU4y1G7SG', 'BV1cL4y1e7nu',
    'BV18L4y1Y7xh', 'BV1N64y1z7tZ', 'BV1J3411676k', 'BV1Vw411d7Ef', 'BV1Eb4y19779', 'BV15dq4y1S7p1',
    'BV1Nh411W7Xg', 'BV1UQ4y1R788', 'BV1Yv41177CP', 'BV16B4y1F7cf', 'BV16f4y1V79i', 'BV1sdq4y1J7gp',
    'BV12o4y1D7M8', 'BV1Qdq4y157ni', 'BV143411672r', 'BV1MP4y147xE', 'BV1Ho4y1U7rk', 'BV1rw411o7t3',
    'BV1iM4y1N7BK', 'BV11v41157hs', 'BV1AM4y1573t', 'BV1G44y117VJ', 'BV1hB4y1M7aZ', 'BV1H54y1p7mv',
    'BV1Uy4y1u7tZ', 'BV1D54y137jL', 'BV14b4y1R7CB', 'BV12h411m7z1', 'BV1mp4y187a2', 'BV1ZN411X7Ydq',
    'BV1zQ4y127S1', 'BV1cv411K795', 'BV1Aw411R78E', 'BV1jX4y157Zc', 'BV1m54y1H7ut', 'BV1R44y1i7iV',
    'BV1BU4y1n7Xr', 'BV1KL411n7FP', 'BV1K44y117ZT', 'BV1Ww411f7bx', 'BV1aX4y1F76L', 'BV1nM4y1G7ic',
    'BV1ho4y1C7mdq', 'BV1ay4y1T7ie', 'BV11U4y1P7Us', 'BV1AX4y1L77e', 'BV1ph411s74s', 'BV1Rh411D7Qu',
    'BV19P4y1x7Hg', 'BV1Adq4y1Q7AQ', 'BV1Wv411P7DC', 'BV15L4y1Y7E5', 'BV1dL41147eN', 'BV1w54y1J7es',
    'BV1Vb4y1y7Jv', 'BV1mM4y1N7BY', 'BV1Uf4y1N7PL', 'BV14f4y1r7ti', 'BV13K4y1g7pJ', 'BV1fX4y1w78A',
    'BV1kV411b7sT', 'BV1wV411x796', 'BV1Qg411G79D', 'BV1Yh411r7WY', 'BV1Qdq4y1Q7NB', 'BV1Ey4y1V7FC',
    'BV1dq54y1s7EL', 'BV1C64y1X7J7', 'BV1Ui4y1P7rm', 'BV1vM4y1K7jh', 'BV1zg411g7EW', 'BV1Ro4y1X74H',
    'BV1mg411u7bp', 'BV1SL411b7xY', 'BV1cf4y1b7he', 'BV1Rb4y1z7Dc', 'BV1k44y167py', 'BV1KU4y1n7th',
    'BV1JP4y147JM', 'BV1ZK4y1u7vs', 'BV1RM4y1K7Le', 'BV1ip4y1h7dE', 'BV1Rv411G7DP', 'BV1db4y1o75W',
    'BV1Qb4y1R7yk', 'BV1Nf4y1G7fn', 'BV1264y1o72k', 'BV1H64y1e7nr', 'BV1ib4y1m7GM', 'BV1Qv411A72o',
    'BV18b4y1C7fJ', 'BV1Vg411V7WD', 'BV1V44y1B7n2', 'BV1yQ4y1h7cw', 'BV1nM4y1G7yc', 'BV1954y1E7aR',
    'BV1dqp4y1n7Qw', 'BV1BQ4y1R7hU', 'BV1ro4y1R7BS', 'BV1Ag411E7rX', 'BV1Tf4y1a73C', 'BV1rX4y1F7B7',
    'BV1564y1R7dqX', 'BV1RQ4y127tT', 'BV1xM4y1G7wr', 'BV1hB4y1K7Dt', 'BV1gZ4y1c71V', 'BV13L4y1Y71J',
    'BV1ky4y1M7MJ', 'BV1U54y1L71Q', 'BV1mh411k7pt', 'BV1mM4y1T7G2', 'BV13y4y1j7nR', 'BV1do4y1S7cH',
    'BV1xK4y1X7SE', 'BV19P4y147BS', 'BV1dv411e7Pr', 'BV1rdq4y1H7bw', 'BV1hw411d7Gf', 'BV15g41177N9',
    'BV1eg411T7Tw', 'BV1cv411a7nL', 'BV1G54y177EU', 'BV1o54y1Y7QH', 'BV1ey4y1G7mL', 'BV1Ty4y1u72m',
    'BV1MP4y1t78dq', 'BV1F64y1dq7gW', 'BV1N44y127hX', 'BV1i64y1z7fZ', 'BV1A84y1F7fg', 'BV1Hdq4y1D7z4',
    'BV1t44y1k7YM', 'BV1Lf4y1h7Vi', 'BV1sM4y1V7sD', 'BV1UZ4y1A7aA', 'BV1zP4y147iW', 'BV12o4y1C7vp',
    'BV1e64y1r7i7', 'BV1iP4y1p7ST', 'BV1mU4y1J7DX', 'BV1Rdq4y1j7C9', 'BV15U4y1P7NZ', 'BV1hw411f7KE',
    'BV1H64y1r7DN', 'BV1964y1m7dU', 'BV1H64y1r7DN', 'BV1964y1m7dU', 'BV1Zo4y1D72n', 'BV1Po4y1C7QH',
    'BV1wf4y1a78W', 'BV1RN411f7kC', 'BV1c64y1o7Co', 'BV15f4y1k7LK', 'BV1Zh411W7XQ', 'BV1CV411H7BH',
    'BV1eB4y1T7rs', 'BV1XK4y1X7d3', 'BV11K41137QV', 'BV1Jy4y1T7vT', 'BV1xf4y1V7Se', 'BV1654y1G7hn',
    'BV1hV411j7Jx', 'BV1e54y1L79N', 'BV1xP4y1a7uS', 'BV1hB4y1N7dh', 'BV1Ci4y1c7Rp', 'BV1iL41147Qdq',
    'BV1Rg411j7bv', 'BV14A411G7vr', 'BV1dK411F7nw', 'BV1L44y1k7JQ', 'BV1eb4y127Ei', 'BV1vf4y1a7Pe',
    'BV1gL411J7nw', 'BV1j3411r7sP', 'BV19Q4y1R79U', 'BV1H54y1H78N', 'BV1pL411n7TR', 'BV153411r7Sp',
    'BV1dqP4y1x78p', 'BV1m5411g7md', 'BV1ydq4y1D7hm', 'BV1wK4y1G7im', 'BV1U64y1U7rn', 'BV1sV411W7SC',
    'BV1sV411W7SC', 'BV16U4y1t7T9', 'BV1Xf4y137Gc', 'BV1YA411g7Wm', 'BV1XK4y1N7gR', 'BV1zdq4y1p7dh',
    'BV1dQ4y167ya', 'BV1zL4y1a7X9', 'BV1FV411W7e7', 'BV1uL411H7T1', 'BV1dqg41157Jk', 'BV1ao4y1C7gA',
    'BV1sy4y1G7wN', 'BV1EX4y1w7YV', 'BV1Ag411g7bx', 'BV1m44y127W6', 'BV1Hv411j7Hy', 'BV1Y44y1y7GH',
    'BV1j5411u7cX', 'BV1Vy4y1b7iP', 'BV1Xb4y1C7fB', 'BV13M4y1M7jd', 'BV1Gh411a7k6', 'BV1Mb4y1m7tZ',
    'BV1jb4y1o7R1', 'BV1MM4y1K7dv', 'BV1XL4y1e7iA', 'BV1z54y1G7Nj', 'BV1x64y1Q7Rb', 'BV1Zf4y1p7dq3',
    'BV1kv411P71D', 'BV1354y177pT', 'BV1cK4y1u7Q2', 'BV1L64y197dqV', 'BV1L3411z7B9', 'BV1odq4y1D7U2',
    'BV1MN411Z7wV', 'BV12y4y1u78P', 'BV1Tb4y1C7X3', 'BV1W64y1C7fj', 'BV1Bf4y1H7ZK', 'BV17A411V7Uh',
    'BV1Vh411dq7p1', 'BV1hK411F7xa', 'BV1dX4y1V7kt', 'BV12o4y117Ur', 'BV1n44y117bdq', 'BV1hdq4y1U7Ac',
    'BV1oX4y1G73S', 'BV1e64y1k7XA', 'BV11A411A7QD', 'BV1Fv411P7eC', 'BV1tv411A7dq8', 'BV1rM4y1u76r',
    'BV1A64y1R7Xg', 'BV1Ldq4y1X7yd', 'BV1LQ4y1o7CY', 'BV1vg411V74d', 'BV1Ey4y1G796', 'BV1U44y1i7wB',
    'BV1g54y1H7pA', 'BV1xw411f7LN', 'BV1ab4y1m7uV', 'BV1so4y1U7CB', 'BV1Hdq4y1S7Nm', 'BV1hv411V7Wh',
    'BV1dg411V7yh', 'BV1j54y1V7fS', 'BV13b4y1D7et', 'BV19f4y147kX', 'BV1m5411K7ec', 'BV1eo4y1X7E7',
    'BV1R64y1t7x8', 'BV1764y1s7uu', 'BV1654y1E7hW', 'BV1TV411p7KR', 'BV1SZ4y1w7WX', 'BV1op4y147xo',
    'BV1B64y1C7zs', 'BV1d64y1z7La', 'BV1VV411dq714', 'BV1Zf4y1372Y', 'BV1fA411c7j8', 'BV1d64y1d7k4',
    'BV1oQ4y1277n', 'BV1e64y1D7dqY', 'BV1CM4y1T7zdq', 'BV1mV411v7p7', 'BV1Qf4y1t7W2', 'BV1fP4y1a7yF',
    'BV1CK4y1N77T', 'BV1PB4y1w7Tf', 'BV1KB4y1w7op', 'BV11h411H7BL', 'BV1BM4y157h7', 'BV1sQ4y197r7',
    'BV1J44y1C7vdq', 'BV15y4y1u7AZ', 'BV1B64y1S7yG', 'BV1Kg41177Ac', 'BV1J44y1C71H', 'BV1cK4y1R7Ei',
    'BV1TL411t79D', 'BV1tv411n7Qh', 'BV12f4y1b7iC', 'BV1yy4y1s7Hw', 'BV1rL4y1a7bN', 'BV1yQ4y1Y7Q4',
    'BV1cK4y1X7zM', 'BV14y4y1L7wS', 'BV1mh411878c', 'BV1G44y1k7Le', 'BV1dqg411j7FL', 'BV1r5411u74H',
    'BV1GV411H7QY', 'BV13Q4y1m7k2', 'BV1X54y1G7tU', 'BV1VV411dq7WT', 'BV1864y1Y7gZ', 'BV1aZ4y1A7Zi',
    'BV1ph411S756', 'BV1x64y1v7rU', 'BV1LK4y1g7bn', 'BV1pb4y1S7No', 'BV1uo4y1S7z6', 'BV18U4y1H7dqE',
    'BV1Ty4y1x7tP', 'BV1k54y1b7fd', 'BV1fP4y1W7cQ', 'BV1Z5411T7Sm', 'BV1io4y1C7VF', 'BV1oo4y1m7rJ',
    'BV18z4y1S728', 'BV1pdq4y1E71C', 'BV1D54y1j7FN', 'BV1Yy4y1p7i6', 'BV1xU4y1W7af', 'BV1Hh411Q7go',
    'BV1n34y1Q7tA', 'BV11Q4y127Bb', 'BV1n34y1Q7tA', 'BV11Q4y127Bb', 'BV1QB4y1K7xy', 'BV1odq4y1L7h4',
    'BV1aK411w7tm', 'BV1tA411T7VU', 'BV1e64y1z79Z', 'BV1KU4y177jv', 'BV1zL411479w', 'BV1SV411478z',
    'BV1WB4y1M7fz', 'BV11o4y1f7XQ', 'BV1344y167m6', 'BV15P4y1p7Cf', 'BV1Gh411e7PS', 'BV19U4y1n73a',
    'BV1rL4y1Y7bE', 'BV1R54y1J7jo', 'BV1kK4y1X7Nh', 'BV1ky4y1K7HF'
]

console.log(lst.length)
let len = lst.length - 1

function randn() {
    return Math.round(Math.random() * len);
}

function myrand(change) {
    let part
    if (change == '') part = lst[randn()]
    else part = change
    url = `https://player.bilibili.com/player.html?bvid=${part}&high_dquality=1`
    myframe.src = url
}

function check() {
    if (innerWidth <640) {
        let rows = document.getElementsByClassName('row')
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i]
            row.removeChild(row.firstChild)
        }
        let myframe = document.getElementById('myframe')
        myframe.style.width = '95vw'
        myframe.style.height = '25vh'
        let pos=document.getElementsByClassName('pos')
        for (let i = 0; i < pos.length; i++) {
            pos[i].style.position = 'relative';
            pos[i].style.top = '10vh';
        }
        let h1s=document.getElementsByTagName('h1')
        for (let i = 0; i < h1s.length; i++) {
            h1s[i].style.color = 'black';
        }
    }
}