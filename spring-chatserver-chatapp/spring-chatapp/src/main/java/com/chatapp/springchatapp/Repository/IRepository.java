package com.chatapp.springchatapp.Repository;

import java.util.function.Function;

public interface IRepository<T> {

    /**
     *
     * @param src
     * @return
     */
    public T FindEntity(Function<T,Boolean> src);

    /**
     *
     * @return
     */
    public T getEntityID();


    /**
     *
     * @param src
     */
    public void updateEntity(T src);

    /**
     *
     * @param src
     */
    public void setEntity(T src);

    /**
     *
     * @param ID
     */
    public void deleteEntity(Object ID);
}
