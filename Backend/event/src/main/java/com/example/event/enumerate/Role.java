package com.example.event.enumerate;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor 
public enum Role {
    USER(
        Set.of(
            Permission.USER_READ,
            Permission.USER_CREATE,
            Permission.USER_UPDATE,
            Permission.USER_DELETE
        )
        
    ),
    ADMIN(
        Set.of(
            Permission.ADMIN_READ,
            Permission.ADMIN_CREATE,
            Permission.ADMIN_UPDATE,
            Permission.ADMIN_DELETE,
            Permission.USER_READ,
            Permission.USER_CREATE,
            Permission.USER_UPDATE,
            Permission.USER_DELETE
        )
    )
    ;

    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = getPermissions().stream().map(permission -> new SimpleGrantedAuthority(permission.name())).collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_"+this.name()));
        return authorities;
    }
}
